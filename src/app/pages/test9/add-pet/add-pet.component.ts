import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet.model';
import { PetsService } from '../pets.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  standalone: false,
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  petForm!: FormGroup;
  types = ['dog', 'cat', 'bird', 'fish', 'reptile'];

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.petForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('dog', Validators.required),
      breed: new FormControl('', Validators.required),
      age: new FormControl(1, [Validators.required, Validators.min(0)]),
      price: new FormControl(500, [Validators.required, Validators.min(0)]),
      isAvailable: new FormControl(true),
      imageUrl: new FormControl('')
    });
  }

  onSubmit(): void {
    if (this.petForm.invalid) {
      return;
    }

    const newPet: Pet = new Pet(
      0, // 服务会生成新ID
      this.petForm.value.name,
      this.petForm.value.type,
      this.petForm.value.breed,
      this.petForm.value.age,
      this.petForm.value.price,
      this.petForm.value.isAvailable,
      this.petForm.value.imageUrl || `https://picsum.photos/seed/${this.petForm.value.name}/200/200`
    );

    this.petsService.addPet(newPet).subscribe(() => {
      this.petForm.reset({
        type: 'dog',
        age: 1,
        price: 500,
        isAvailable: true
      });
      alert('宠物添加成功！');
    });
  }
}
