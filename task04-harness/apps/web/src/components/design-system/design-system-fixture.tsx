import {
  Badge,
  Button,
  Callout,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Container,
  ControlPanelFrame,
  FeatureGrid,
  FeatureStatusBadge,
  HeroPattern,
  HostingComparisonTable,
  HostingPricingCard,
  InfrastructurePanel,
  Section,
  TrustStrip,
} from "@smartec/ui";

export function DesignSystemFixture() {
  return (
    <main data-design-system-fixture="stage-01-task-05">
      <HeroPattern
        eyebrow="Design system fixture"
        title="A durable interface foundation for hosting."
        description="This temporary fixture validates typography, surfaces, component rhythm and responsive composition. It contains no production pricing, customer metrics or live service claims."
        actions={
          <>
            <Button type="button">Primary action</Button>
            <Button type="button" variant="outline">
              Secondary action
            </Button>
          </>
        }
        visual={
          <ControlPanelFrame>
            <div className="grid gap-3 sm:grid-cols-2">
              <InfrastructurePanel>
                <div aria-hidden="true" className="mb-5 size-5 rounded-md bg-primary" />
                <p className="font-semibold">Illustration surface</p>
                <p className="mt-1 text-sm text-muted-foreground">No customer or live system data.</p>
              </InfrastructurePanel>
              <InfrastructurePanel>
                <FeatureStatusBadge status="included" label="Static example" />
                <p className="mt-5 font-semibold">Semantic state</p>
                <p className="mt-1 text-sm text-muted-foreground">Text accompanies color meaning.</p>
              </InfrastructurePanel>
            </div>
          </ControlPanelFrame>
        }
      />

      <Section>
        <Container>
          <div className="mb-8 max-w-2xl">
            <Badge variant="secondary">Composition patterns</Badge>
            <h2 className="mt-4 text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] tracking-[var(--tracking-heading)]">
              Reusable surfaces, not page-specific rules.
            </h2>
          </div>
          <FeatureGrid>
            {[
              ["Feature grid", "Responsive content grouping with semantic surfaces."],
              ["Trust section", "Designed for evidence-backed statements only."],
              ["Infrastructure", "Illustration frames never imply live status."],
            ].map(([title, copy]) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">{copy}</CardContent>
              </Card>
            ))}
          </FeatureGrid>

          <TrustStrip className="mt-8">
            <span>Evidence-backed claims only</span>
            <span>No fabricated review counts</span>
            <span>No fake live indicators</span>
          </TrustStrip>
        </Container>
      </Section>

      <Section className="bg-muted/55">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <HostingPricingCard
            name="Plan pattern"
            summary="A pricing-card component ready to receive audited catalog data in the next task."
            features={["Evidence-aware features", "Accessible list semantics", "Optional CTA"]}
            badge="No production price"
          />
          <HostingComparisonTable
            caption="Design-system comparison table fixture"
            columns={[
              { key: "standard", label: "Standard" },
              { key: "advanced", label: "Advanced" },
            ]}
            rows={[
              {
                feature: "Example capability",
                values: {
                  standard: <FeatureStatusBadge status="included" />,
                  advanced: <FeatureStatusBadge status="included" />,
                },
              },
              {
                feature: "Optional capability",
                values: {
                  standard: <FeatureStatusBadge status="optional" />,
                  advanced: <FeatureStatusBadge status="included" />,
                },
              },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <Callout title="Status semantics">
            Status components are presentation labels only. They must not be used as a live uptime or service-health indicator unless a later task supplies a real authoritative status source.
          </Callout>
        </Container>
      </Section>

      <section className="dark bg-background py-16 text-foreground" data-theme-preview="dark">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[var(--tracking-label)] text-primary">Dark theme contrast fixture</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-semibold">The same semantic components, one alternate theme.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Dark mode overrides semantic tokens rather than duplicating component rules.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button type="button">Primary</Button>
            <Button type="button" variant="outline">Outline</Button>
            <Badge variant="success">Accessible status</Badge>
          </div>
        </Container>
      </section>
    </main>
  );
}
