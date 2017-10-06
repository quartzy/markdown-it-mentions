import MarkdownIt from 'markdown-it';
import { load } from 'markdown-it-testgen';
import mentionPlugin from './index';

const path = require('path');

function generate(filePath, md) {
  load(filePath, {}, function ({ fixtures, file, meta = {} }) {
    const description = meta.desc || path.relative(__dirname, file);
    const _describe = meta.skip ? describe.skip : describe;

    _describe(description, () => {
      fixtures.forEach(fixture => {
        const line = fixture.first.range[0] - 1;
        const header = fixture.header ? fixture.header : `line ${line}`;

        it(header, () => {
          const expected = fixture.second.text;
          const actual = md.render(fixture.first.text);

          expect(actual).toEqual(expected);
        });
      });
    });
  });
}

let md = new MarkdownIt({}).use(mentionPlugin, {});

generate(path.join(__dirname, '../test/fixtures.txt'), md);
