import  {Router} from 'express'
import { Category } from '../models/Category'


const CategoriesRoutes = Router()

const categories: Category[] = []

CategoriesRoutes.post("/", (request,response)=>{
    
    const {name,description} = request.body

    const category = new Category()

    Object.assign(category, {
        name,
        description,
        created_at:new Date()
    })

    categories.push(category)

    return response.status(201).json({category})
})

CategoriesRoutes.get("/", (request,response)=>{

    return response.status(200).json(categories)
})

export {CategoriesRoutes}