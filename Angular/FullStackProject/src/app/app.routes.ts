import { Routes } from '@angular/router';
import { Products } from './products/products';
import { AddProduct } from './add-product/add-product';
import { Editproduct } from './edit-product/edit-product';

export const routes: Routes = [
     {
        path:"",
        component: Products
    },
    {
        path:"addproduct",
        component: AddProduct
    }
    ,
    {
        path:"editproduct/:id",
        component: Editproduct
    }
];
