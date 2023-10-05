export const isNotEmpty = (value) => value.trim() !== '';
export const isNotLessThanSix = (value)=> value.trim() !== '' && value.trim().length > 6;
export const isEmail = (value) => value.includes('@');
export const isEmpty = (value) => {
if(value){
    return true;
} else{
    return false
};
}


