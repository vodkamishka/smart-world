function sortArray (todoList) {
    todoList.sort(function (a, b) {
        if (a.business > b.business) {
            return 1;
        }
        if (a.business < b.business) {
            return -1;
        }
        return 0;
    });
    return todoList
}
    


export default sortArray;    