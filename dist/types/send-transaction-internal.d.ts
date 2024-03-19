import type { Signature } from '@solana/keys';
import type { Rpc, SendTransactionApi } from '@solana/rpc';
import { Commitment } from '@solana/rpc-types';
import { waitForDurableNonceTransactionConfirmation, waitForRecentTransactionConfirmation } from '@solana/transaction-confirmation';
import { BaseTransaction, IDurableNonceTransaction, IFullySignedTransaction, ITransactionWithBlockhashLifetime, ITransactionWithFeePayer } from '@solana/transactions';
interface SendAndConfirmDurableNonceTransactionConfig extends SendTransactionBaseConfig, SendTransactionConfigWithoutEncoding {
    confirmDurableNonceTransaction: (config: Omit<Parameters<typeof waitForDurableNonceTransactionConfirmation>[0], 'getNonceInvalidationPromise' | 'getRecentSignatureConfirmationPromise'>) => Promise<void>;
    transaction: IDurableNonceTransaction & SendableTransaction;
}
interface SendAndConfirmTransactionWithBlockhashLifetimeConfig extends SendTransactionBaseConfig, SendTransactionConfigWithoutEncoding {
    confirmRecentTransaction: (config: Omit<Parameters<typeof waitForRecentTransactionConfirmation>[0], 'getBlockHeightExceedencePromise' | 'getRecentSignatureConfirmationPromise'>) => Promise<void>;
    transaction: ITransactionWithBlockhashLifetime & SendableTransaction;
}
interface SendTransactionBaseConfig extends SendTransactionConfigWithoutEncoding {
    abortSignal?: AbortSignal;
    commitment: Commitment;
    rpc: Rpc<SendTransactionApi>;
    transaction: SendableTransaction;
}
interface SendTransactionConfigWithoutEncoding extends Omit<NonNullable<Parameters<SendTransactionApi['sendTransaction']>[1]>, 'encoding'> {
}
export type SendableTransaction = BaseTransaction & IFullySignedTransaction & ITransactionWithFeePayer & (IDurableNonceTransaction | ITransactionWithBlockhashLifetime);
export declare function sendTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({ abortSignal, commitment, rpc, transaction, ...sendTransactionConfig }: SendTransactionBaseConfig): Promise<Signature>;
export declare function sendAndConfirmDurableNonceTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({ abortSignal, commitment, confirmDurableNonceTransaction, rpc, transaction, ...sendTransactionConfig }: SendAndConfirmDurableNonceTransactionConfig): Promise<Signature>;
export declare function sendAndConfirmTransactionWithBlockhashLifetime_INTERNAL_ONLY_DO_NOT_EXPORT({ abortSignal, commitment, confirmRecentTransaction, rpc, transaction, ...sendTransactionConfig }: SendAndConfirmTransactionWithBlockhashLifetimeConfig): Promise<Signature>;
export {};
//# sourceMappingURL=send-transaction-internal.d.ts.map