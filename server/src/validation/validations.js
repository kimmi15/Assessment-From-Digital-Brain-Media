export const validName = value => /^[a-zA-Z ]{2,20}$/.test(value);

export const validEmail = value => /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value);

export const validPassword = value => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/.test(value);
