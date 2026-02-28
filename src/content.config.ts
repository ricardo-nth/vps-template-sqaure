import { defineCollection, z } from 'astro:content';

const profileContentSchema = z.object({
  'supported-living': z.object({
    heading: z.string(),
    subheading: z.string(),
  }),
  'dom-care': z.object({
    heading: z.string(),
    subheading: z.string(),
  }),
});

const serviceCardSchema = z.object({
  title: z.string(),
  description: z.string(),
  href: z.string(),
  imageKey: z.string(),
  imageAlt: z.string(),
});

const contactOptionSchema = z.object({
  icon: z.string(),
  title: z.string(),
  value: z.string(),
  href: z.string(),
  description: z.string().optional(),
  primary: z.boolean().optional(),
});

const contactSectionSchema = z.object({
  heading: z.string(),
  intro: z.string(),
  phoneLabel: z.string(),
  phoneHref: z.string(),
  emailLabel: z.string(),
  emailHref: z.string(),
  emailButtonText: z.string(),
  address: z.string(),
  officeTitle: z.string(),
  officeDirectionsText: z.string(),
  officeDirectionsHref: z.string(),
  hoursTitle: z.string(),
  officeHours: z.array(
    z.object({
      day: z.string(),
      time: z.string(),
    })
  ),
  hoursNote: z.string(),
});

const metadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  schema: z.record(z.string(), z.any()),
});

const compliancePillarsSchema = z.object({
  badgeLabel: z.string(),
  heading: z.string(),
  subheading: z.string(),
  pillars: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
      cqcEvidence: z.string(),
    })
  ),
});

const careDeliveryProcessSchema = z.object({
  badgeLabel: z.string(),
  heading: z.string(),
  subheading: z.string(),
  steps: z.array(
    z.object({
      number: z.number(),
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })
  ),
});

const serviceSpecialtiesSchema = z.object({
  heading: z.string(),
  subheading: z.string(),
  specialties: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
      imageKey: z.string(),
      features: z.array(z.string()),
    })
  ),
});

const serviceFitSchema = z.object({
  badgeLabel: z.string(),
  heading: z.string(),
  intro: z.string(),
  suitableForTitle: z.string(),
  suitableFor: z.array(z.string()),
  alternativeSupportTitle: z.string(),
  alternativeSupport: z.array(z.string()),
});

const outcomesSnapshotSchema = z.object({
  heading: z.string(),
  intro: z.string(),
  stats: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
      detail: z.string(),
    })
  ),
});

const firstThirtyDaysSchema = z.object({
  heading: z.string(),
  intro: z.string(),
  milestones: z.array(
    z.object({
      dayRange: z.string(),
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),
});

const faqSectionSchema = z.object({
  heading: z.string(),
  intro: z.string(),
  items: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  ),
});

const squareGlobal = defineCollection({
  type: 'data',
  schema: z.object({
    profileSummary: z.object({
      'supported-living': z.string(),
      'dom-care': z.string(),
    }),
  }),
});

const squareHome = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      profileContent: profileContentSchema,
      primaryCtaText: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaHref: z.string(),
      rating: z.string(),
      ratingLabel: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
      socialProofTitle: z.string(),
      socialProofSubtitle: z.string(),
      socialProofCountLabel: z.string(),
    }),
    servicesOverview: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
      ctaText: z.string(),
      ctaHref: z.string(),
      services: z.array(serviceCardSchema),
    }),
    aboutUs: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      description: z.array(z.string()),
      imageKey: z.string(),
      imageAlt: z.string(),
      phoneLabel: z.string(),
      phoneHref: z.string(),
      sectionId: z.string(),
    }),
    whyChooseUs: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
      ctaText: z.string(),
      ctaHref: z.string(),
      className: z.string(),
      points: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          iconName: z.string(),
        })
      ),
      testimonial: z.object({
        quote: z.string(),
        initials: z.string(),
        author: z.string(),
        role: z.string(),
      }),
    }),
    teamSection: z.object({
      heading: z.string(),
      intro: z.string(),
      members: z.array(
        z.object({
          name: z.string(),
          role: z.string(),
          credentials: z.string(),
          description: z.string(),
          imageKey: z.string(),
          imageAlt: z.string(),
        })
      ),
    }),
    contactSection: contactSectionSchema,
  }),
});

const squareServices = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      primaryCtaText: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaHref: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
    }),
    servicesOverview: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
      services: z.array(serviceCardSchema),
    }),
    supportedLivingFeatures: z.object({
      heading: z.string(),
      subheading: z.string(),
      features: z.array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    serviceSpecialties: serviceSpecialtiesSchema,
    compliancePillars: compliancePillarsSchema,
    careDeliveryProcess: careDeliveryProcessSchema,
    contactSection: contactSectionSchema,
  }),
});

const squareComplexCare = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      profileContent: profileContentSchema,
      primaryCtaText: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaHref: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
    }),
    outcomesSnapshot: outcomesSnapshotSchema,
    serviceFit: serviceFitSchema,
    firstThirtyDays: firstThirtyDaysSchema,
    whyChooseUs: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
      id: z.string(),
      points: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          iconName: z.string(),
        })
      ),
    }),
    cqcJourney: z.object({
      badgeLabel: z.string().optional(),
      heading: z.string(),
      subheading: z.string(),
      steps: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          status: z.enum(['completed', 'current', 'upcoming']),
          date: z.string().optional(),
        })
      ),
    }),
    faqSection: faqSectionSchema,
    contactSection: contactSectionSchema,
  }),
});

const squareAbout = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      primaryCtaText: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaHref: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
      socialProofTitle: z.string(),
      socialProofSubtitle: z.string(),
      socialProofCountLabel: z.string(),
    }),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
    story: z.object({
      heading: z.string(),
      subheading: z.string(),
      paragraphs: z.array(z.string()),
      imagePlaceholderLabel: z.string(),
    }),
    valuesSection: z.object({
      heading: z.string(),
      intro: z.string(),
    }),
    values: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
    teamSection: z.object({
      heading: z.string(),
      intro: z.string(),
      members: z.array(
        z.object({
          name: z.string(),
          role: z.string(),
          credentials: z.string(),
          description: z.string(),
          imageKey: z.string(),
          imageAlt: z.string(),
        })
      ),
    }),
    ctaSection: z.object({
      heading: z.string(),
      intro: z.string(),
      buttonText: z.string(),
      buttonHref: z.string(),
    }),
  }),
});

const squareContact = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      primaryCtaText: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaHref: z.string(),
      quickContactHeading: z.string(),
    }),
    quickContactOptions: z.array(contactOptionSchema),
    contactOptionsSection: z.object({
      heading: z.string(),
      intro: z.string(),
    }),
    gridContactOptions: z.array(contactOptionSchema),
    officeLocation: z.object({
      badgeLabel: z.string(),
      heading: z.string(),
      intro: z.string(),
      officeLabel: z.string(),
      address: z.string(),
      mapUrl: z.string(),
      directionsUrl: z.string(),
      directionsText: z.string(),
    }),
    feedbackSection: z.object({
      heading: z.string(),
      intro: z.string(),
      compliment: z.object({
        title: z.string(),
        description: z.string(),
        actionText: z.string(),
        actionHref: z.string(),
      }),
      complaint: z.object({
        title: z.string(),
        description: z.string(),
        actionText: z.string(),
        actionHref: z.string(),
      }),
      cqcNote: z.string(),
      cqcLinkText: z.string(),
      cqcLinkHref: z.string(),
    }),
  }),
});

const squareServiceModel = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      primaryCtaText: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaHref: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
    }),
    whyChooseUs: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
      id: z.string(),
      points: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          iconName: z.string(),
        })
      ),
      testimonial: z.object({
        quote: z.string(),
        initials: z.string(),
        author: z.string(),
        role: z.string(),
      }),
    }),
    cqcJourney: z.object({
      badgeLabel: z.string(),
      heading: z.string(),
      subheading: z.string(),
      steps: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          status: z.enum(['completed', 'current', 'upcoming']),
          date: z.string().optional(),
        })
      ),
    }),
    contactSection: contactSectionSchema,
  }),
});

export const collections = {
  squareGlobal,
  squareHome,
  squareServices,
  squareComplexCare,
  squareAbout,
  squareContact,
  squareServiceModel,
};
