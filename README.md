# @quartzy/markdown-it-mentions

[![Latest Version on NPM][ico-version]][link-npm]
[![Software License][ico-license]](LICENSE)
[![Build Status][ico-circleci]][link-circleci]
[![Total Downloads][ico-downloads]][link-downloads]


A plugin for [markdown-it](https://github.com/markdown-it/markdown-it) that turns:

```markdown
@[Freddie Mercury](mention://user/48249279)
```

into:

```html
<span class="mention" data-type="user" data-id="48249279">Freddie Mercury</span>
```

## Installation

```bash
yarn add @quartzy/markdown-it-mentions
```

## Usage

```js
import markdownitMentions from '@quartzy/markdown-it-mentions';

const md = markdownit().use(markdownitMentions);
```

## Development

```bash
# Run tests
yarn test

# Build distributable
yarn build

# Build and watch for changes
yarn watch
```

## Credits

- [Tristan Pemble](https://github.com/tristanpemble)
- [All Contributors][link-contributors]

## License

The Apache License, v2.0. Please see [License File](LICENSE) for more information.

[ico-version]: https://img.shields.io/npm/v/@quartzy/markdown-it-mentions.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-Apache%202.0-brightgreen.svg?style=flat-square
[ico-circleci]: https://img.shields.io/circleci/project/github/quartzy/markdown-it-mentions/master.svg?style=flat-square
[ico-downloads]: https://img.shields.io/npm/dt/@quartzy/markdown-it-mentions.svg?style=flat-square

[link-npm]: https://www.npmjs.com/package/@quartzy/markdown-it-mentions
[link-circleci]: https://circleci.com/gh/quartzy/markdown-it-mentions/tree/master
[link-downloads]: https://www.npmjs.com/package/@quartzy/markdown-it-mentions
[link-contributors]: ../../contributors
