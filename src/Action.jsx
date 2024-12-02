
export const addCard = (car) => ({
    type : 'add_car',
    payload: car
})

export const removeCard = (id) => ({
    type : 'remove_car',
    payload: id
})