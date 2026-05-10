// Server-renderable JSON-LD <script> tag for Schema.org structured data.
// Pass a single schema object or an array of them.

type Props = { data: object | object[] };

export default function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      // Stringify once, server-side. JSON.stringify safely escapes < and >
      // is handled below to avoid </script> injection in pathological data.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
