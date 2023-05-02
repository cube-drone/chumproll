const assert = require('assert');
const { chumpgen, chumptest } = require('../index.js')

describe('Tests', async function () {
    
    it('can tell that these passwords suck', async function () {
        assert(chumptest("password"))
        assert(chumptest("password1"))
        assert(chumptest("123456789"))
        assert(chumptest("12345678"))
        assert(chumptest("asdfjkl;"))
        assert(chumptest("nikki1986"))
        assert(chumptest("harleydavidson!"))
        assert(chumptest("susanna1"))
        assert(chumptest("susanna1"))
        assert(chumptest("vikings1969"))
    });

    it('can tell that these passwords are less bad (at least, not on the list)', async function () {
        assert(!chumptest("benniganmcflabbigan"))
        assert(!chumptest("!}fAx;u3V=:*UoOs5,"))
        assert(!chumptest("breechingactresssquadexcusably"))
    });

    it('generates useless passwords', async function(){
        for(let i = 0; i < 100; i++){
            let pw = chumpgen()
            assert(chumptest(pw))
            assert(pw.length >= 8)
        }
    })

})

