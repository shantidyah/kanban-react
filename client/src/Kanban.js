import React from 'react'

class Kanban extends React.Component {
    constructor(){
        super()
        this.state = {
            todos : [],
            done : [],
            backlogs : ['makan'],
            doings :[],
            val : ''
        }
    }
    addBL(){
        let addbl = this.state.backlogs
        addbl.push(this.state.val)
        this.setState({
            backlogs : addbl,
            val : ''
        })
    }
    addTodo(bl,index){
        let addtodo = this.state.todos
        let splicebl = this.state.backlogs
        addtodo.push(bl)
        splicebl.splice(index,1)
        this.setState({
            todos : addtodo,
            backlog : splicebl
        })
    }
    addDoing(todo,index){
        let adddoing = this.state.doings
        let splicetodo = this.state.todos
        adddoing.push(todo)
        splicetodo.splice(index,1)
        this.setState({
            doing: adddoing,
            todos: splicetodo
        })
    }
    addDone(doing,index){
        let adddone = this.state.done
        let splicedoing = this.state.doings
        adddone.push(doing)
        splicedoing.splice(index,1)
        this.setState({
            done: adddone,
            doings: splicedoing
        })
    }
    delete(index){
        let splicedone = this.state.done
        splicedone.splice(index,1)
        this.setState({
            done: splicedone
        })   
    }
    backdoing(done,index){
        let adddoing = this.state.doings
        let splicedone = this.state.done
        adddoing.push(done)
        splicedone.splice(index,1)
        this.setState({
            doing: adddoing,
            done: splicedone
        })
    }
    backTodo(doing,index){
        let addtodo = this.state.todos
        let splicedoing = this.state.doings
        addtodo.push(doing)
        splicedoing.splice(index,1)
        this.setState({
            todos: addtodo,
            doing: splicedoing
        })
    }
    backbl(todo,index){
        let addbacklog = this.state.backlogs
        let splicetodo = this.state.todos
        addbacklog.push(todo)
        splicetodo.splice(index,1)
        this.setState({
            backlogs: addbacklog,
            todo: splicetodo
        })
    }
    render(){
        const {todos, val, done, backlogs, doings} = this.state
        return(
            // {isAdmin === true ?condisi1 : condisi2 }
            <div>
                <br/>
                <input type="text" placeholder="todo" value = {val} onChange={(e)=> this.setState({ val : e.target.value})}></input>
                <button onClick = {() =>{
                    this.addBL()
                }}>add</button>
                <br/>
                <br/>
                <div class="row">
                    <div class="col-md-3">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Backlogs</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {backlogs.map((backlog,index)=>{
                                    return <tr key='index'>
                                        <td>
                                            {backlog}
                                        </td>
                                        <td>
                                        <i class="fas fa-arrow-circle-right fa-2x" onClick = {()=>{
                                                this.addTodo(backlog,index)
                                            }}></i>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div class="col-md-3">
                        <table class="table">
                            <thead>
                                <tr>
                                <th></th>
                                <th scope="col">Todo</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.map((todo,index)=>{
                                    return <tr key='index'>
                                        <td>
                                            <i class="fas fa-arrow-circle-left fa-2x" onClick = {()=>{
                                                this.backbl(todo,index)
                                            }}></i>
                                        </td>
                                        <td>
                                            {todo}
                                        </td>
                                        <td>   
                                            <i class="fas fa-arrow-circle-right fa-2x" onClick = {()=>{
                                                this.addDoing(todo,index)
                                            }}></i>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="col-md-3">
                        <table class="table">
                            <thead>
                                <tr>
                                <th></th>
                                <th scope="col">Doing</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {doings.map((doing,index)=>{
                                    return <tr key='index'>
                                        <td>
                                            <i class="fas fa-arrow-circle-left fa-2x" onClick = {()=>{
                                                this.backTodo(doing,index)
                                            }}></i>
                                        </td>
                                        <td>
                                            {doing}
                                        </td>
                                        <td>
                                            <i class="fas fa-arrow-circle-right fa-2x" onClick = {()=>{
                                                this.addDone(doing,index)
                                            }}></i>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>       

                    <div class="col-md-3">
                        <table class="table">
                            <thead>
                                <tr>
                                <th></th>
                                <th scope="col">Done</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                    {done.map((selesai,index)=>{
                                        return <tr key="index">
                                            <td>
                                                <i class="fas fa-arrow-circle-left fa-2x" onClick = {()=>{
                                                    this.backdoing(selesai,index)
                                                }}></i>
                                            </td>
                                            <td>
                                                {selesai}
                                            </td>
                                            <td>
                                                <i class="fas fa-trash fa-2x" onClick = {()=>{
                                                    this.delete(index)
                                                }}></i>
                                            </td>

                                        </tr>
                                    })}
                            </tbody>
                        </table>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Kanban