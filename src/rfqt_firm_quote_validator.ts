import { LogFunction, RfqtFirmQuoteValidator as RfqtFirmQuoteValidatorInterface } from '@0x/asset-swapper';
import { RFQTFirmQuote } from '@0x/quote-server';
import { Connection } from 'typeorm';

/**
 * Does a "synthetic order validation" of RFQ-T firm quotes based on cached
 * maker asset balances from the database.
 */
export class RfqtFirmQuoteValidator implements RfqtFirmQuoteValidatorInterface {
    constructor(private readonly _database: Connection, private readonly _warningLogger: LogFunction) {}

    /**
     * Validate a quote using cached maker asset balances.
     *
     * Currently just a stub.
     */
    public async filterInvalidQuotesAsync(quotes: RFQTFirmQuote[]): Promise<RFQTFirmQuote[]> {
        if (this._database === undefined) {
            this._warningLogger({ msg: 'invalid database' });
        }
        return Promise.resolve(quotes);
    }
}
