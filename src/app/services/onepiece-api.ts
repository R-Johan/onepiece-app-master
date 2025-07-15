import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OnepieceApiService {
  readonly baseUrl = 'https://api.api-onepiece.com/v2/fruits/fr';

  constructor(private readonly http: HttpClient) {}

  getFruits(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  getFruitById(id: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/${id}`
    );
  }
  // URL base pour personnages (à adapter si besoin)
  readonly charactersUrl = 'https://api.api-onepiece.com/v2/characters/fr';

  // Liste de personnages
  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.charactersUrl);
  }

  // Détail personnage par ID
  getCharacterById(id: string): Observable<any> {
    return this.http.get<any>(`${this.charactersUrl}/${id}`);
  }
}
