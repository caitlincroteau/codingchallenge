

//CREATE ONE
//needs to look up city id for that value in the city table
// const add_client = (client) => {
//   const values = [
//   client.year,
//   client.active,
//   client.id,
//   client.first_name,
//   client.last_name,
//   client.gender,
//   client.dob,
//   client.city,
//   client.indigenous,
//   client.pwd,
//   client.vet,
//   client.emergency_sheltered,
//   client.bus_pass,
//   client.clothing_supplement,
//   client.pet_deposit,
//   client.pssg,
//   client.status,
//   client.deceased,
//   client.city_id 
//   ];

//   const queryString = `
//   INSERT INTO clients (
//   year,
//   active,
//   id,
//   first_name,
//   last_name,
//   gender,
//   dob,
//   city,
//   indigenous,
//   pwd,
//   vet,
//   emergency_sheltered,
//   bus_pass,
//   clothing_supplement,
//   pet_deposit,
//   pssg,
//   status,
//   deceased,
//   city_id)
//   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19);`;

//   return [queryString, values];
// };

//READ ONE
//const get_client = (firstName, lastName) => {
//return `
//SELECT * FROM clients WHERE first_name = ${firstName} 
//AND last_name = ${lastName};
//`;
//};

//UPDATE ONE
// const update_client = (client) => {
//   const values = [
//   client.year,
//   client.active,
//   client.first_name,
//   client.last_name,
//   client.gender,
//   client.dob,
//   client.city,
//   client.indigenous,
//   client.pwd,
//   client.vet,
//   client.emergency_sheltered,
//   client.bus_pass,
//   client.clothing_supplement,
//   client.pet_deposit,
//   client.pssg,
//   client.status,
//   client.deceased,
//   client.city_id,
//   client.id
//   ];

//   const queryString = `
//   UPDATE clients SET 
// year = COALESCE($1, year),
// active = COALESCE($2, active),
// first_name = COALESCE($3, first_name),
// last_name = COALESCE($4, last_name),
// gender = COALESCE($5, gender),
// dob = COALESCE($6, dob),
// city = COALESCE($7, city),
// indigenous = COALESCE($8, indigenous),
// pwd = COALESCE($9, pwd),
// vet = COALESCE($10, vet),
// emergency_sheltered = COALESCE($11, emergency_sheltered),
// bus_pass = COALESCE($12, bus_pass),
// clothing_supplement = COALESCE($13, clothing_supplement),
// pet_deposit = COALESCE($14, pet_deposit),
// pssg = COALESCE($15, pssg),
// status = COALESCE($16, status),
// deceased = COALESCE($17, deceased),
// city_id = COALESCE($18, city_id)
// WHERE 
// id = $19
// `;
// return [queryString, values];
// };


// DELETE ONE
// const delete_client = (clientID) => {
//   return `DELETE FROM clients WHERE id = $1 RETURNING * id = ${clientID};
//   `;
// };