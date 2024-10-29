const process = require('process')
const opentelemetry = require('@opentelemetry/sdk-node')
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node')
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http')
const { Resource } = require('@opentelemetry/resources')
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions')

if (process.env.OPEN_TELEMETRY && process.env.OPEN_TELEMETRY !== '') {
  const traceExporter = new OTLPTraceExporter({
    url: `${process.env.OPEN_TELEMETRY ?? ''}/v1/traces`
  })
  const sdk = new opentelemetry.NodeSDK({
    traceExporter,
    instrumentations: [getNodeAutoInstrumentations()],
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: `${process.env.APP_NAME}-${process.argv[3] ?? ''}`
    })
  })
  sdk.start()

  process.on('SIGTERM', () => {
    sdk.shutdown()
      .then(() => console.log('Tracing terminated'))
      .catch((error) => console.log('Error terminating tracing', error))
      .finally(() => process.exit(0))
  })
}
