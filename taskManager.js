function createTaskManager(){
  let tasks = []

  return {
    addTask(task, priority = "normal"){
      tasks.push(task)
      return `Task: ${task} | priority: ${priority}`;
    },

    addTasks(...items){
      tasks.push(...items)
      return tasks;
    },

    listTasks(){
      return `These are the tasks: ${tasks.join(", ")}`
    },

    removeTask(taskName){
      for(let i = 0; i < tasks.length; i++){
        if(taskName === tasks[i]){
          tasks.splice(i, 1)
          return `${tasks}`;
        }
      }
    
      return `Task not found!!!` 
    },

    saveTasks(callback){
      // callback(tasks)
      setTimeout(() => {
        callback(tasks);
      }, 1000)
    },

    
    getTask(){
      return tasks;
    }
  }

}

// const manager = createTaskManager();
// console.log(manager.addTask("Make timetable", "high"))
// console.log(manager.addTasks("Make timetable", "Assign Duties"))
// console.log(manager.listTasks())
// manager.removeTask("Make timetable")
// console.log(manager.listTasks())

// manager.saveTasks(() => {
//   console.log(`TASKS SAVED`)
// })
