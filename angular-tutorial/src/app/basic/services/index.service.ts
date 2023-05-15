import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GlobalService {
  product = [
    {
      id: 22,
      name: "Dustin",
      rating: 7
    },
    {
      id: 29,
      name: "Brutus",
      rating: 1
    },
    {
      id: 31,
      name: "Lubber",
      rating: 8
    }
  ];

  constructor() {}
  getData() {
    return "This is the list of sailors" + " and their corresponding ratings";
  }
}
