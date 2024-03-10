import { Models } from "appwrite";

interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = "task" | "progress" | "done" 

interface Column {
  id: TypedColumn,
  tasks: Task[]
}

interface Task {
  $id: string,
  $createdAt: string,
  title: string,
  status: TypedColumn,
  image: string
}

interface Image {
  bucketId: string,
  fileId: string,

}