const process = require('child_process');
const fs = require('fs')

module.exports = {
    hooks: {
        init: function () {
            const root = this.resolve('')
            console.log('root: ' + root);
            //直接调用命令
            process.exec("${root}/node_modules/gitbook-plugin-build-summary/buildsummary.sh",[root],
                function (error, stdout, stderr) {
                    // fs.writeFileSync( `${root}/SUMMARY.md`, stdout, { encoding: 'utf8' } )
                    console.log('stdout: ' + stdout);
                    if (error !== null) {
                        // console.log('stdout: ' + stdout);
                        console.log('stderr: ' + stderr);
                        console.log('exec error: ' + error);
                    }
                });

        }
    }
}