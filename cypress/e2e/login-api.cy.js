import { generateRandomPassword } from '../support/commands';

const baseUrl = 'https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/oauth/token';

describe('Login', () => {
  it('Unauthorized user', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      //This option is required to test negative scenarios that is different from 2xx or 3xx
      failOnStatusCode: false,
      //This is required because the post request is form-data
      form: true,
      body: {
        grant_type: 'password',
        username: 'leader',
        password: '123'
      }
    }).should((response) => {
      // console.log(response.status);
      expect(response.status).to.eq(401);
    })
  })

  it('Authorized user', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      //This option is required to test negative scenarios that is different from 2xx or 3xx
      failOnStatusCode: false,
      //This is required because the post request is form-data
      form: true,
      body: {
        grant_type: 'password',
        username: 'tauser',
        password: '.Xt1PZ6h'
      }
    }).should((response) => {
      // console.log(response.status);
      expect(response.status).to.eq(200);
    })
  })
})