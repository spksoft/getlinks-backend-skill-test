const chai = require('chai')
const expect = chai.expect
const request = require('superagent')
const should = require('should')
const mongoose = require('mongoose')
const CONFIG = require('../../src/config')

const agent = request.agent()
const host = `localhost:${CONFIG.PORT}/api`

mongoose.Promise = global.Promise
mongoose.connect(CONFIG.MONGO_URI)

const User = require('../../src/models/User')
const Token = require('../../src/models/Token')

describe('LOGIN /Register', () => {
  it('should return firstname lastname username and hidden password ', (done) => {
    const temp = User.findOne({ username: 'spksoft' })
    temp.then((r) => {
      r.remove().then((rr) => {
        agent
        .post(host + '/register')
        .send({
          firstname: 'sippakorn',
          lastname: 'raksakiart',
          username: 'spksoft',
          password: 'password',
        })
        .end((err, res) => {
          const { firstname, lastname, username, password } = res.body.body
          expect(firstname).to.equal('sippakorn')
          expect(lastname).to.equal('raksakiart')
          expect(username).to.equal('spksoft')
          expect(password).to.equal('hidden')
          done()
        })
      })
    })
  })
})

describe('LOGIN /login', () => {
  it('should have accessToken and refreshToken property', (done) => {
    const temp = User.findOne({ username: 'spksoft' })
    temp.then((r) => {
      r.remove().then((rr) => {
        const newUser = new User({
          username: 'spksoft',
          password: 'd307eb8487052f48da94494f31b2586fc9ba2dc4dda4127e2aa3d6f77cc4df14'
        })
        newUser.save().then((rrr) => {
          agent
          .post(host + '/login')
          .send({
            username: 'spksoft',
            password: 'test',
          })
          .end((err, res) => {
            expect(res.body.body).to.have.property('accessToken')
            expect(res.body.body).to.have.property('refreshToken')
            done()
          })
        })
      })
    })
  })
})