export interface ITodoItem {
    importance: boolean
    title: string
    description: string
    id: string
    timestamps: {
        createdOn: number
        modifiedOn: number
        completedOn: {
            date: number
            state: boolean
        }
    }

}
