import { Injectable } from '@angular/core';
import { Pet } from './pet.model';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private apiUrl = 'https://api.example.com/pets'; // 示例API地址
  private petsChanged = new Subject<Pet[]>();
  private pets: Pet[] = [
    new Pet(1, 'Buddy', 'dog', 'Golden Retriever', 3, 1200, true, 'https://picsum.photos/seed/dog1/200/200'),
    new Pet(2, 'Whiskers', 'cat', 'Siamese', 2, 800, true, 'https://picsum.photos/seed/cat1/200/200'),
    new Pet(3, 'Rocky', 'dog', 'Bulldog', 5, 1500, false, 'https://picsum.photos/seed/dog2/200/200'),
    new Pet(4, 'Mittens', 'cat', 'Persian', 1, 1000, true, 'https://picsum.photos/seed/cat2/200/200'),
    new Pet(5, 'Charlie', 'bird', 'Parrot', 4, 500, true, 'https://picsum.photos/seed/bird1/200/200')
  ];

  constructor(private http: HttpClient) { }

  // 获取所有宠物
  getPets(): Observable<Pet[]> {
    // 实际应用中会从API获取数据
    return of(this.pets);
  }

  // 根据ID获取宠物
  getPet(id: number): Observable<Pet | undefined> {
    const pet = this.pets.find(p => p.id === id);
    return of(pet);
  }

  // 添加新宠物
  addPet(pet: Pet): Observable<Pet> {
    // 生成新ID
    const newId = Math.max(...this.pets.map(p => p.id)) + 1;
    pet.id = newId;
    this.pets.push(pet);
    this.petsChanged.next([...this.pets]);
    return of(pet);
  }

  // 更新宠物信息
  updatePet(pet: Pet): Observable<Pet> {
    const index = this.pets.findIndex(p => p.id === pet.id);
    if (index !== -1) {
      this.pets[index] = pet;
      this.petsChanged.next([...this.pets]);
    }
    return of(pet);
  }

  // 删除宠物
  deletePet(id: number): Observable<void> {
    this.pets = this.pets.filter(p => p.id !== id);
    this.petsChanged.next([...this.pets]);
    return of();
  }

  // 获取可用宠物
  getAvailablePets(): Observable<Pet[]> {
    return of(this.pets.filter(pet => pet.isAvailable));
  }

  // 应用批量折扣
  applyBulkDiscount(type: string, percentage: number): Observable<Pet[]> {
    this.pets
      .filter(pet => pet.type === type && pet.isAvailable)
      .forEach(pet => pet.applyDiscount(percentage));
    this.petsChanged.next([...this.pets]);
    return of(this.pets);
  }

  // 监听宠物数据变化
  getPetsChangedListener() {
    return this.petsChanged.asObservable();
  }

  // 实际项目中会使用的HTTP方法示例
  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  // 从API获取数据（示例方法）
  fetchPetsFromApi(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }

  // 保存宠物到API（示例方法）
  savePetToApi(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet, this.getHttpOptions());
  }
}  