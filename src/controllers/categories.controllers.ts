import { Request, Response } from "express";
import {
  ICategory,
  ICategoryRealEstate,
} from "../interfaces/categories.interfaces";
import { createCategoryService } from "../services/categories/createCategory.service";
import { listCategoriesService } from "../services/categories/listCategory.service";
import { retrieveCategoriesByRealEstateService } from "../services/categories/retrieveCategoriesByRealEstate.service";

export const createCategoryController = async (
  request: Request,
  response: Response
) => {
  const categoryData: ICategory = request.body;

  const category = await createCategoryService(categoryData);

  return response.status(201).json(category);
};

export const listCategoriesController = async (
  request: Request,
  response: Response
) => {
  const categories = await listCategoriesService();

  return response.json(categories);
};

export const retrieveCategoriesByRealEstateController = async (
  request: Request,
  response: Response
) => {
  const idCategory: number = parseInt(request.params.id);
  const categoryRealEstate: ICategoryRealEstate =
    await retrieveCategoriesByRealEstateService(idCategory);
  return response.json(...categoryRealEstate);
};
