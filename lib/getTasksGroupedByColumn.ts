import { database } from "@/appwrite"
import { TypedColumn, Column } from "@/typings"

export const getTasksGroupedByColumn = async () => {
  const data = await database.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!, 
    process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!
  )

  console.log(data)
  
  const tasks = data.documents

  const columns = tasks.reduce((accu, task) =>{
    if (!accu.get(task.status)) {
      accu.set(task.status, {
        id: task.status,
        tasks: []
      })
    }

    accu.get(task.status)!.tasks.push({
      $id: task.$id,
      $createdAt: task.$createdAt,
      title: task.title,
      status: task.status,
      // get the image if it exists
      ...(task.image && {image: JSON.parse(task.image)})
    })

    return accu

  }, new Map<TypedColumn, Column>)

  console.log(columns)
}