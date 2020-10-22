import { expect } from '@0x/contracts-test-utils';
import { RFQTFirmQuote } from '@0x/quote-server';
import { logUtils } from '@0x/utils';
import 'mocha';
import { Connection } from 'typeorm';

import { RfqtFirmQuoteValidator } from '../src/rfqt_firm_quote_validator';

describe('RfqtFirmQuoteValidator', () => {
    describe('filterInvalidQuotesAsync', () => {
        it('returns what its given', async () => {
            expect(
                await new RfqtFirmQuoteValidator(
                    (undefined as unknown) as Connection,
                    logUtils.warn,
                ).filterInvalidQuotesAsync((undefined as unknown) as RFQTFirmQuote[]),
            ).to.equal(undefined);
        });
    });
});
