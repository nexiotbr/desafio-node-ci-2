import { join } from 'path';
import { spawn } from 'child_process';



const testAppFilePath = join(
    __dirname,
    'index.js'
)

describe('stdout behaviour', () => {

    it('params 10 + 12', done => {     
        const testApp = spawn('node', [testAppFilePath, 10, '+', 12])
      
        testApp.stdout.on('data', data => {
            expect(parseInt(data.toString())).toBe(22)
            testApp.kill('SIGINT')
            done()
        })
    })

    it('params 45-21', done => {      
        const testApp = spawn('node', [testAppFilePath, 45, '-', 21])
        
        testApp.stdout.on('data', data => {
            expect(parseInt(data.toString())).toBe(24)
            testApp.kill('SIGINT')
            done()
        })
    })

    it('params 3 b 4', done => {      
        const testApp = spawn('node', [testAppFilePath, 3, 'b', 4])
        
        testApp.stdout.on('data', data => {
            expect(data.toString()).toBe('usage: <number> "+" | "-" | "*" | "/" | "^" <number>\n')
            testApp.kill('SIGINT')
            done()
        })
    })

    it('params 5 * -3', done => {      
        const testApp = spawn('node', [testAppFilePath, 5, '*', -3])
        
        testApp.stdout.on('data', data => {
            expect(parseInt(data.toString())).toBe(-15)
            testApp.kill('SIGINT')
            done()
        })
    })

    it('params 5 / 0', done => {      
        const testApp = spawn('node', [testAppFilePath, 5, '/', 0])
        
        testApp.stdout.on('data', data => {
            expect(data.toString()).toBe('div by zero\n')
            testApp.kill('SIGINT')
            done()
        })


    })


});