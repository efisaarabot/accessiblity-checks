module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
    },
    collect: {
      url: ['http://localhost:3000/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
