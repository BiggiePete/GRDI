const ICONS_DIR = 'build/icons/256x256.ico'

const windowsOS = {
    win: {
        icon: ICONS_DIR,
        publisherName: 'michal',
        target: 'nsis'
    },

    nsis: {
        differentialPackage: true,
        perMachine: true
    }
}

const linuxOS = {
    linux: {
        icon: ICONS_DIR,
        target: 'deb'
    }
}

const macOS = {
    mac: {
        target: 'dmg',
        icon: ICONS_DIR
    },
    dmg: {
        contents: [{
                x: 410,
                y: 150,
                type: 'link',
                path: '/Applications'
            },
            {
                x: 130,
                y: 150,
                type: 'file'
            }
        ]
    }
}

module.exports = {
    productName: 'grdi',
    appId: 'com.grdi.app',
    fileAssociations: [{
        ext: "grdi",
        name: "GRDI Save File",
    }],
    artifactName: 'setup-${version}.${ext}',
    directories: {
        output: 'build'
    },
    // default files: https://www.electron.build/configuration/contents
    files: [
        'package.json',
        {
            from: 'dist/main/',
            to: 'dist/main/'
        },
        {
            from: 'dist/renderer',
            to: 'dist/renderer/'
        }
    ],
    extraResources: [{
        from: 'src/extraResources/',
        to: ''
    }],
    ...windowsOS,
    ...linuxOS,
    ...macOS
}
