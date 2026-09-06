import { CategoryModel } from "../models/categoryModel.js";

export const CategoryController = {
  async getAll(req, res) {
    try {
      const categories = await CategoryModel.getAll();
      res.json({
        success: true,
        message: "Categories retrieved successfully",
        data: categories
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const category = await CategoryModel.getById(req.params.id);
      res.json({
        success: true,
        message: "Category retrieved successfully",
        data: category
      });
    } catch (err) {
      res.status(404).json({ success: false, error: err.message });
    }
  },

  async create(req, res) {
    try {
      const category = await CategoryModel.create(req.body);
      res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: category
      });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  },

  async update(req, res) {
    try {
      const category = await CategoryModel.update(req.params.id, req.body);
      res.json({
        success: true,
        message: "Category updated successfully",
        data: category
      });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  },

  async remove(req, res) {
    try {
      await CategoryModel.remove(req.params.id);
      res.json({
        success: true,
        message: "Category deleted successfully"
      });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  },
};
