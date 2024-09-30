import api from "@/lib/axios";

export default {
    getCustomers() {
        return api.get('/customers')
    },
    addCustomer(data) {
        return api.post("/customers", data)
    },
    getCustomer(id) {
        return api.get("/customers/" + id)
    },
    editCustomer(id, data) {
        return api.patch("/customers/" + id, data)
    },
    editState(id, data) {
        return api.patch("/customers/" + id, data)
    },
    deleteCustomer(id) {
        return api.delete("/customers/" + id)
    }

}