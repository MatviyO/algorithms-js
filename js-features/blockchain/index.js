let crypto = requre('crypto')
let txt = 'hello world'
let hash = crypto.createHash('sha256').update(text).digest('hex');
