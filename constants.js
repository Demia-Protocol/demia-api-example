require('dotenv').config();

const baseUrl = process.env.BASE_URL || 'https://api.demia.net';
const username = process.env.USERNAME || 'testing@test.net'; // Replace with your own username
const password = process.env.PASSWORD || 'Password123'; // Replace with your own password

// True if you would like to create a new site from scratch and send data manually (takes longer but is a more dynamic and live test)
const createNew = process.env.CREATE_NEW === 'true' || false;

const molinaProject = true;
// Demo Project in testnet
//
// Site 1
//const auth_identifier = "834f4f148d47b7282e743e8c07b9154dfb6f3d26cee8feba1df18c9dc00c7dc1";
//const announcement = "8d4ad5136adacd92c865d08b7c429387f13b36c09d37e23ae953f19d09cb5ba0fa651e284c51104b:7cdb77619e402a14297e289a";
//const site_id = "578e167356c8d910b4686958d7fc7958b9867349badf838313ba1c9416f9ee83";

// Site 2
//const auth_identifier = "87b0b686dcef3beab98fc54eebd9f10a41d2f0e2fc4b379099a3b04c2ea2e283";
//const announcement = "b78a87b095bc0d7c10b51583acb6b455e5c9749cacc8b314c356c6654f07f54d249a13d3e898d9b8:f929b7e8878bda9ebd6aacb0";
//const site_id = "086406b781fa965050e08cf3c60a2c84070d8cedf8d9dff44241e6271b6e4cb1";

// Hyphen
const auth_identifier = "did:demia:0x78eae0f1906b05da46109525059e236bc758ce4648ac8ea68748eb31d94ce6d2";
const announcement = "75d5a8675ca3403a6472249a8a22267b38184aeb137a81cf156c1b8278965b6c5f0307a292e2e383:88cc58a69dec028d897e446a"
const site_id = "531a6b6a-9f7a-4e6f-be87-3a19875d46ae"

// Empty message address
const msg_address = "00000000000000000000000000000000000000000000000000000000000000000000000000000000:000000000000000000000000"

// Registry parameters for guardian registration
const registry_params = {
    operatorId: "0.0.4992026", // This is the operatorId of the guardian account
    operatorKey: "302e020100300506032b657004220420c073087e41090e20d50b94f940cfab491e26de21644614ba352e711f55849d21", // This is the operatorKey of the guardian account
    policy: "DemiaTest", // This is the guardian policy that is to be attached
}

// Link parameters for guardian registration
const link_params = {
    username: "Installer",
    password: "test",
}

module.exports = {
    baseUrl, username, password, auth_identifier, announcement, site_id, msg_address,
    registry_params, link_params, createNew, molinaProject
};
