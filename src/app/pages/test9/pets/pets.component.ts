import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet.model';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  standalone: false,
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];
  filteredPets: Pet[] = [];
  selectedType: string = 'all';
  discountPercentage: number = 10;
  types = ['all', 'dog', 'cat', 'bird'];

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.petsService.getPets().subscribe(pets => {
      this.pets = pets;
      this.filteredPets = [...pets];
    });

    // 监听宠物数据变化
    this.petsService.getPetsChangedListener().subscribe(pets => {
      this.pets = pets;
      this.filterPets();
    });
  }

  filterPets(): void {
    if (this.selectedType === 'all') {
      this.filteredPets = [...this.pets];
    } else {
      this.filteredPets = this.pets.filter(pet => pet.type === this.selectedType);
    }
  }

  applyDiscount(): void {
    if (this.selectedType !== 'all') {
      this.petsService.applyBulkDiscount(this.selectedType, this.discountPercentage)
        .subscribe(updatedPets => {
          this.pets = updatedPets;
          this.filterPets();
        });
    }
  }

  onDelete(id: number): void {
    if (confirm('确定要删除这个宠物吗？')) {
      this.petsService.deletePet(id).subscribe(() => {
        // 刷新列表
      });
    }
  }
}
