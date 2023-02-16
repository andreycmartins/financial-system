import { Category } from "../types/Category"

export const categories: Category = {
    food: {title: 'Alimentação', color: 'blue', expense: true},
    rent: {title: 'Aluguel', color: '#ff6961', expense: true},
    salary: {title: 'Salário', color: '#61ff69', expense: false},
    expense: {title: 'Dispesa', color: '#ff6961', expense: true},
    profit: {title: 'Ganhos', color: '#61ff69', expense: false},
}