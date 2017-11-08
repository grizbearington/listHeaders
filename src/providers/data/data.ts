import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {
    lists:any = [
        {
            "listHeader": "G",
            Items: [
                {
                    itemHead: "Go",
                    Info: {
                        cost: "$15.78",
                        genre: "Strategy",
                        players: "2"
                    }
                },
                {
                    itemHead: "Gnip Gnop",
                    Info: {
                        cost: "$17.82",
                        genre: "Dexterity",
                        players: "2"
                    }
                },

            ]
        },
        {
            "listHeader": "M",
            Items: [
                {itemHead: "Monopoly",
                    Info: {
                        cost: "$12.65",
                        genre: "Real Estate, Press-your-luck",
                        players: "2-6"
                    }
                },
                {itemHead: "Mastermind",
                    Info: {
                        cost: "$28.36",
                        genre: "Strategy",
                        players: "2"
                    }
                },
                {itemHead: "Mouse Trap",
                    Info: {
                        cost: "$8.53",
                        genre: "Chance",
                        players: "2-4"
                    }
                }
            ]
        },
        {
            "listHeader": "S",
            Items: [
                {itemHead: "Sorry!",
                    Info: {
                        cost: "$8.43",
                        genre: "Take That!, Dice rolling",
                        players: "2-4"
                    }
                },
                {itemHead: "Shadows Over Camelot",
                    Info: {
                        cost: "$54.33",
                        genre: "Co-operative, Traitor",
                        players: "3-7"
                    }
                },
                {itemHead: "Small World",
                    Info: {
                        cost: "$32.65",
                        genre: "Territory Control, Resource Management",
                        players: "2-5(6 w/ expansion"
                    }
                }
            ]
        }
    ];


  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
