import { ProductModel } from "../models/productModel.js"; 

export const ProductController = { 
  async getAll(req, res) { 
    try { 
      const { category_id } = req.query;
      const products = await ProductModel.getAll(category_id); 
      res.json({
        success: true,
        message: "Products retrieved successfully",
        data: products
      }); 
    } catch (err) { 
      res.status(500).json({ success: false, error: err.message }); 
    } 
  }, 

  async getById(req, res) { 
    try { 
      const product = await ProductModel.getById(req.params.id); 
      res.json({
        success: true,
        message: "Product retrieved successfully",
        data: product
      }); 
    } catch (err) { 
      res.status(404).json({ success: false, error: err.message }); 
    } 
  }, 

  async create(req, res) { 
    try { 
      const product = await ProductModel.create(req.body); 
      res.status(201).json({
        success: true,
        message: "Product created successfully",
        data: product
      }); 
    } catch (err) { 
      res.status(400).json({ success: false, error: err.message }); 
    } 
  }, 

  async update(req, res) { 
    try { 
      const product = await ProductModel.update(req.params.id, req.body); 
      res.json({
        success: true,
        message: "Product updated successfully",
        data: product
      }); 
    } catch (err) { 
      res.status(400).json({ success: false, error: err.message }); 
    } 
  }, 

  async remove(req, res) { 
    try { 
      await ProductModel.remove(req.params.id); 
      res.json({ 
        success: true,
        message: "Product deleted successfully" 
      }); 
    } catch (err) { 
      res.status(400).json({ success: false, error: err.message }); 
    } 
  }, 
};