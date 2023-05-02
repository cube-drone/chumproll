
## Chumproll

A utility for detecting very stupid or bad passwords

```
let {chumptest, chumpgen} = require('@cube-drone/chumproll`)

async function main(){
    assert(chumptest('password'))
    assert(chumptest('harleydavidson'))
    assert(chumptest('12345678'))

    let shittyPassword = chumpgen()
}
```
