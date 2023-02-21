import todo from "../model/Todo.js"  

export const addTodo = async (request, response) => {

    try{ 
        console.log(request.body)
        const newTodo = await todo.create({
            data: request.body.data,
            createdAt: Date.now()
        })
        await newTodo.save();
        return response.status(200).json(newTodo);
    }catch(error){
        return response.status(500).json(error.message)
    }

} 

export const getAllTodos = async (request, response)=>{
    try{
     const todos =   await Todo.find({}).sort({createdAt : -1})
     return response.status(200).json(newTodo);
    }catch(error){
        return response.status(500).json(error.message)
    }
}