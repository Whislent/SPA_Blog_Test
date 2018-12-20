export const GET_ID = 'GET_ID'

export function getId(id) {
    return {
        type: GET_ID,
        payload: id,
    }
}