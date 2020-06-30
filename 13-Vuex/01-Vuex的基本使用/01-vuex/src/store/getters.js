export default{
    ageMore40(state) {
        return state.students.filter(s => s.age > 40);
    },
    ageMore40Length(state, getters) {
        return getters.ageMore40.length
    },
    getStudentById(state) {
        // return function(id){
        //     return state.students.filter(s=>s.id==id)
        // }
        return id => {
            return state.students.filter(s => s.id == id)
        }
    }
}