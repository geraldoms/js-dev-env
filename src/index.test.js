import { expect } from 'chai';
import { describe, it } from 'mocha';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Sample test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('index.html', () => {
  it('Should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users:');
      done();
      window.close();
    });
  })
});
