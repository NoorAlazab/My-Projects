describe('API Testing with Cypress', () => {
    
 //
    it('Add Employee', () => {

        document.write("asd")
        cy
        .request('POST', 'http://192.168.204.171:7070/demo-server/employee-module/noor/', {
            firstName: "Noor",
            lastName: "Alazab",
             id : "123",
            salary : "10000"
          })
        // .then((response) => {
        //     expect(response.status).to.eq(302)
 
        //  })
        expect(response.body).to.have.property() // true

     })

   
}) 
