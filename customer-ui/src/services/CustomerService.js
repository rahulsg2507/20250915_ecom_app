const API_URL = "http://localhost:8080/customers;"
const getAll = () =>{
    return fetch(API_URL).then(res => res.json());

};
const create = (customer) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(customer)
    }).then(res => res.json());
};
    const remove = (id) =>{
        return fetch(`${API_URL}/${id}`,{
        method: 'DELETE',
        });
    };
    const CustomerService = {
        getAll,
        create,
        remove,
    };
    export default CustomerService;