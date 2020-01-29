## API Report File for "@azure/ai-text-analytics"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { OperationOptions } from '@azure/core-http';
import { PipelineOptions } from '@azure/core-http';
import { ServiceClientCredentials } from '@azure/core-http';
import { TokenCredential } from '@azure/identity';
import { WebResource } from '@azure/core-http';

// @public
export type AnalyzeSentimentErrorResult = TextAnalyticsErrorResult;

// @public
export type AnalyzeSentimentOptions = TextAnalyticsOperationOptions;

// @public
export type AnalyzeSentimentResult = AnalyzeSentimentSuccessResult | AnalyzeSentimentErrorResult;

// @public
export interface AnalyzeSentimentResultCollection extends Array<AnalyzeSentimentResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface AnalyzeSentimentSuccessResult extends TextAnalyticsSuccessResult {
    documentScores: SentimentConfidenceScorePerLabel;
    sentences: SentenceSentiment[];
    sentiment: DocumentSentimentValue;
}

// @public
export interface DetectedLanguage {
    iso6391Name: string;
    name: string;
    score: number;
}

// @public
export type DetectLanguageErrorResult = TextAnalyticsErrorResult;

// @public
export interface DetectLanguageInput {
    // (undocumented)
    countryHint?: string;
    id: string;
    // (undocumented)
    text: string;
}

// @public
export type DetectLanguageResult = DetectLanguageSuccessResult | DetectLanguageErrorResult;

// @public
export interface DetectLanguageResultCollection extends Array<DetectLanguageResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export type DetectLanguagesOptions = TextAnalyticsOperationOptions;

// @public
export interface DetectLanguageSuccessResult extends TextAnalyticsSuccessResult {
    readonly detectedLanguages: DetectedLanguage[];
    readonly primaryLanguage: DetectedLanguage;
}

// @public
export type DocumentSentimentValue = 'positive' | 'neutral' | 'negative' | 'mixed';

// @public
export interface Entity {
    length: number;
    offset: number;
    score: number;
    subtype?: string;
    text: string;
    type: string;
}

// @public
export type ErrorCodeValue = 'invalidRequest' | 'invalidArgument' | 'internalServerError' | 'serviceUnavailable';

// @public
export type ExtractKeyPhrasesErrorResult = TextAnalyticsErrorResult;

// @public
export type ExtractKeyPhrasesOptions = TextAnalyticsOperationOptions;

// @public
export type ExtractKeyPhrasesResult = ExtractKeyPhrasesSuccessResult | ExtractKeyPhrasesErrorResult;

// @public
export interface ExtractKeyPhrasesResultCollection extends Array<ExtractKeyPhrasesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface ExtractKeyPhrasesSuccessResult extends TextAnalyticsSuccessResult {
    keyPhrases: string[];
}

// @public
export interface InnerError {
    code: InnerErrorCodeValue;
    details?: {
        [propertyName: string]: string;
    };
    innerError?: InnerError;
    message: string;
    target?: string;
}

// @public
export type InnerErrorCodeValue = 'invalidParameterValue' | 'invalidRequestBodyFormat' | 'emptyRequest' | 'missingInputRecords' | 'invalidDocument' | 'modelVersionIncorrect' | 'invalidDocumentBatch' | 'unsupportedLanguageCode' | 'invalidCountryHint';

// @public
export interface LinkedEntity {
    dataSource: string;
    id?: string;
    language: string;
    matches: Match[];
    name: string;
    url: string;
}

// @public
export interface Match {
    length: number;
    offset: number;
    score: number;
    text: string;
}

// @public
export type RecognizeEntitiesErrorResult = TextAnalyticsErrorResult;

// @public
export type RecognizeEntitiesOptions = TextAnalyticsOperationOptions;

// @public
export type RecognizeEntitiesResult = RecognizeEntitiesSuccessResult | RecognizeEntitiesErrorResult;

// @public
export interface RecognizeEntitiesResultCollection extends Array<RecognizeEntitiesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface RecognizeEntitiesSuccessResult extends TextAnalyticsSuccessResult {
    readonly entities: Entity[];
}

// @public
export type RecognizeLinkedEntitiesErrorResult = TextAnalyticsErrorResult;

// @public
export type RecognizeLinkedEntitiesOptions = TextAnalyticsOperationOptions;

// @public
export type RecognizeLinkedEntitiesResult = RecognizeLinkedEntitiesSuccessResult | RecognizeLinkedEntitiesErrorResult;

// @public
export interface RecognizeLinkedEntitiesResultCollection extends Array<RecognizeLinkedEntitiesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface RecognizeLinkedEntitiesSuccessResult extends TextAnalyticsSuccessResult {
    readonly entities: LinkedEntity[];
}

// @public
export type RecognizePiiEntitiesOptions = TextAnalyticsOperationOptions;

// @public
export interface SentenceSentiment {
    length: number;
    offset: number;
    sentenceScores: SentimentConfidenceScorePerLabel;
    sentiment: SentenceSentimentValue;
    warnings?: string[];
}

// @public
export type SentenceSentimentValue = 'positive' | 'neutral' | 'negative';

// @public
export interface SentimentConfidenceScorePerLabel {
    // (undocumented)
    negative: number;
    // (undocumented)
    neutral: number;
    // (undocumented)
    positive: number;
}

// @public
export class TextAnalyticsApiKeyCredential implements ServiceClientCredentials {
    constructor(apiKey: string);
    signRequest(webResource: WebResource): Promise<WebResource>;
    updateKey(apiKey: string): void;
}

// @public
export class TextAnalyticsClient {
    constructor(endpointUrl: string, credential: TokenCredential | TextAnalyticsApiKeyCredential, options?: TextAnalyticsClientOptions);
    analyzeSentiment(inputs: string[], language?: string, options?: AnalyzeSentimentOptions): Promise<AnalyzeSentimentResultCollection>;
    analyzeSentiment(inputs: TextDocumentInput[], options?: AnalyzeSentimentOptions): Promise<AnalyzeSentimentResultCollection>;
    defaultCountryHint: string;
    defaultLanguage: string;
    detectLanguages(inputs: string[], countryHint?: string, options?: DetectLanguagesOptions): Promise<DetectLanguageResultCollection>;
    detectLanguages(inputs: DetectLanguageInput[], options?: DetectLanguagesOptions): Promise<DetectLanguageResultCollection>;
    readonly endpointUrl: string;
    extractKeyPhrases(inputs: string[], language?: string, options?: ExtractKeyPhrasesOptions): Promise<ExtractKeyPhrasesResultCollection>;
    extractKeyPhrases(inputs: TextDocumentInput[], options?: ExtractKeyPhrasesOptions): Promise<ExtractKeyPhrasesResultCollection>;
    recognizeEntities(inputs: string[], language?: string, options?: RecognizeEntitiesOptions): Promise<RecognizeEntitiesResultCollection>;
    recognizeEntities(inputs: TextDocumentInput[], options?: RecognizeEntitiesOptions): Promise<RecognizeEntitiesResultCollection>;
    recognizeLinkedEntities(inputs: string[], language?: string, options?: RecognizeLinkedEntitiesOptions): Promise<RecognizeLinkedEntitiesResultCollection>;
    recognizeLinkedEntities(inputs: TextDocumentInput[], options?: RecognizeLinkedEntitiesOptions): Promise<RecognizeLinkedEntitiesResultCollection>;
    recognizePiiEntities(inputs: string[], language?: string, options?: RecognizePiiEntitiesOptions): Promise<RecognizeEntitiesResultCollection>;
    recognizePiiEntities(inputs: TextDocumentInput[], options?: RecognizePiiEntitiesOptions): Promise<RecognizeEntitiesResultCollection>;
}

// @public
export interface TextAnalyticsClientOptions extends PipelineOptions {
    defaultCountryHint?: string;
    defaultLanguage?: string;
}

// @public
export interface TextAnalyticsError {
    code: ErrorCodeValue;
    details?: TextAnalyticsError[];
    innerError?: InnerError;
    message: string;
    target?: string;
}

// @public
export interface TextAnalyticsErrorResult {
    readonly error: TextAnalyticsError;
    readonly id: string;
}

// @public
export interface TextAnalyticsOperationOptions extends OperationOptions {
    includeStatistics?: boolean;
    modelVersion?: string;
}

// @public
export type TextAnalyticsResult = TextAnalyticsSuccessResult | TextAnalyticsErrorResult;

// @public
export interface TextAnalyticsSuccessResult {
    readonly error?: undefined;
    readonly id: string;
    readonly statistics?: TextDocumentStatistics;
}

// @public
export interface TextDocumentBatchStatistics {
    documentCount: number;
    erroneousDocumentCount: number;
    transactionCount: number;
    validDocumentCount: number;
}

// @public
export interface TextDocumentInput {
    id: string;
    language?: string;
    text: string;
}

// @public
export interface TextDocumentStatistics {
    characterCount: number;
    transactionCount: number;
}


// (No @packageDocumentation comment for this package)

```