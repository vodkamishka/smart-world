import {db} from '../components/app/app';
import {getTime} from '../common/get-time';

export const todoListApi =  {

    getData () {
        return db.collection("todoList")
            .get()
            .then(snapshot => {
                console.log(snapshot)
                let todo = snapshot.docs.map(doc => doc.data())
               
                return todo
            }); 
    },
    addList (todoList, text) {
        let id = todoList.length;
        todoList.forEach((el) => {
            if (id === el.id) id++
        })
        db.collection("todoList").doc(`${id}`).set({
            business:text,
            id, 
            list: []
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    },
    deleteList (id) {
        db.collection("todoList").doc(`${id}`).delete()
        .catch(function(error) {
            console.error("Error removing document: ", error);
        });
    },
    updateList (text, id) {
        db.collection("todoList").doc(`${id}`).update({
            business: text
        })
    },
    addCase (todoList, text, checkbox, id) {
        todoList = todoList.filter(el => el.id === id)[0];
        let idCase = todoList.list.length; 
            todoList.list.forEach((el) => {
                if (idCase === el.idCase) idCase++
            })
        let list = todoList.list;
        db.collection("todoList").doc(`${id}`).update({
             list: [
                ...list,
                {   
                    done: false,
                    importance: checkbox,
                    text,
                    date: getTime(),
                    idCase
                },
            ]
        })
    },
    deleteCase (todoList, id, idCase) {
       
        todoList = todoList.filter(el => el.id === id)[0];
        
        const idxCase = todoList.list.findIndex(el => el.idCase === idCase)
        let list = todoList.list
      
        if (list.length === 1) {
            list = []
        } else {
            list = [
                ...todoList.list.slice(0, idxCase),
                ...todoList.list.slice(idxCase + 1),
            ]
        }
        
        db.collection("todoList").doc(`${id}`).update({list})
    },
    updateCase (todoList, text, idCase, id) {
       
        todoList = todoList.filter(el => el.id === id)[0];
        
        let newCase = todoList.list.filter(el => el.idCase === idCase)[0]
        const idxCase = todoList.list.findIndex(el => el.idCase === idCase)

        const list = [
            ...todoList.list.slice(0, idxCase),
            {...newCase, text},
            ...todoList.list.slice(idxCase + 1),
        ]
        db.collection("todoList").doc(`${id}`).update({list})
    },
    addDoneCheckbox (todoList, done, idCase, id) {
       
        todoList = todoList.filter(el => el.id === id)[0];
        let newCase = todoList.list.filter(el => el.idCase === idCase)[0]
        const idxCase = todoList.list.findIndex(el => el.idCase === idCase)

        const list = [
            ...todoList.list.slice(0, idxCase),
            {...newCase, done},
            ...todoList.list.slice(idxCase + 1),
        ]
        db.collection("todoList").doc(`${id}`).update({list})
    }
   
}