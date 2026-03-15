# TASK MANAGER
## Closures
Closure happens when a function remembers variables from its outer scope even after the outer function is done running

In this project I used closures to remember the tasks I pass into them
I defined a function called createTaskManager and inside it a variable "tasks" as an empty array.

The function has a couple of methods which all relate to the task above but they remember the variable's values passed to them via different methods. They still remember what is passed inside the array in tasks

## Rest and Default Parameters

### Rest Parameters
*Rest Parameters*:  are used to pass in a number of values to something

In this project, rest parameters have been used in the method:

**addTasks(...items){
      tasks.push(...items)
      return tasks;
  },**


As seen in the method above the rest parameter **...items** has been used to accept a number of items passed into it at once


### Default Parameters
**Default parameters:** They are used to give fallback values 

In this project, they have been used in method:

**addTask(task, priority = "normal"){
      tasks.push(task)
      return `Task: ${task} | priority: ${priority}`;
  },**


Just as seen priority has a default values of normal, unless otherwise stated/defined


## Asynchronous callbacks and the event loop
I can say they are callbacks called after certain conditions are met

In this project, the method below show's how they have been utilised:

**saveTasks(callback){
      // callback(tasks)
      setTimeout(() => {
        callback(tasks);
      }, 1000)
  },**

It has been used to simulate a real world case where a certain function does what it is supposed to do after a certain data has been fetched/or a certain process needs to be called before this one is executed
In here we used **setTimeout** to make it wait for 1 second before calling the task

## Summary of Commands Used

1. To create a new branch and move into it:
- git checkout -b feature-core-logic

2. To stage all changes:
- git add .

3. To commit changes:
- git commit -m "your commit description here"

4. To push the branch:
- git push origin feature-core-logic

5. moving to main branch:
- git checkout main

6. To merge branch to main:
- git merge feature-core-logic

7. To push to github:
- git push origin main

8. To delete the merged branch
- git branch -d feature-core-logic

9. To check the branch you currently are on:
- git branch


These are sample of the commands I used, but these are for one branch only, but I did this with all my branches