import React, { Fragment } from 'react'
import Logo from 'components/Logo'
import { Link } from 'react-router-dom'
import SimpleContainer, { Respond } from 'components/SimpleContainer'
import Footer from 'routes/components/Footer'
import { zIndex, styled, mediaDn } from 'styles/cssFor'

const Columns = styled.div`
  ${Respond};
`

const NavbarBackground = styled(SimpleContainer)`
  height: 80px;
  margin-bottom: 2rem;
  ${zIndex('navbar')};
`

const NavbarLogo = styled(Link)`
  svg {
    height: 26px !important;
  }
`

const Navbar = () => (
  <NavbarBackground>
    <NavbarLogo to="/">
      <Logo fill="red" />
    </NavbarLogo>
  </NavbarBackground>
)

const Privacy = () => (
  <Fragment>
    <Navbar />
    <SimpleContainer>
      <Columns>
        <div>
          <h2>Supernatural Software, LLC. PRIVACY POLICY</h2>
          Last Updated: November 19th, 2016<br />
          <br />
          Supernatural, Inc. (“Supernatural,” “we,” and “us”) respects the
          privacy of its users (“you”) and has developed this Privacy Policy to
          demonstrate its commitment to protecting your privacy. This Privacy
          Policy describes the information we collect, how that information may
          be used, with whom it may be shared, and your choices about such uses
          and disclosures. We encourage you to read this Privacy Policy
          carefully when using our application or services or transacting
          business with us. By using our website or application (our “Service”),
          you are accepting the practices described in this Privacy Policy.<br />
          <br />
          If you have any questions about our privacy practices, please refer to
          the end of this Privacy Policy for information on how to contact us.<br />
          <br />
          <b>Information we collect about you</b>
          <br />
          <br />
          We may collect information that can identify you such as your name and
          email address ("personal information") and other information that does
          not identify you. We will collect this information through a mobile
          application. By using the Service, you are authorizing us to gather,
          parse and retain data related to the provision of the Service. When
          you provide personal information through our Service, the information
          may be sent to servers located in the United States and countries
          around the world.<br />
          <br />
          <b>Information you provide</b>
          <br />
          <br />
          In order to register as a user with Supernatural, you will be asked to
          sign in using your Facebook login. If you do so, you authorize us to
          access certain Facebook account information, such as your public
          Facebook profile (consistent with your privacy settings in Facebook),
          your email address, interests, likes, gender, birthday, education
          history, relationship interests, current city, photos, personal
          description, friend list, and information about and photos of your
          Facebook friends who might be common Facebook friends with other
          Supernatural users. You will also be asked to allow Supernatural to
          collect your location information from your device when you download
          or use the Service. In addition, we may collect and store any personal
          information you provide while using our Service or in some other
          manner. This may include identifying information, such as your name,
          address, email address and telephone number, and, if you transact
          business with us, financial information. You may also provide us
          photos, a personal description and information about your gender and
          preferences for recommendations, such as search distance, age range
          and gender. If you chat with other Supernatural users, you provide us
          the content of your chats, and if you contact us with a customer
          service or other inquiry, you provide us with the content of that
          communication.<br />
          <br />
          <b>Use of technologies to collect information</b>
          <br />
          <br />
          We use various technologies to collect information from your device
          and about your activities on our Service.<br />
          <br />
          <b>Information collected automatically</b>
          <br />
          <br />
          We automatically collect information from your device when you visit
          our Service. This information could include your IP address, device ID
          and type, language, the operating system used by your device, access
          times, your mobile device’s geographic location while our application
          is actively running. When you download the app, you may permit us to
          access data on or about your device, including permissions obtained
          through our App or your device (e.g. Google Play on Android). This may
          include include information about the applications installed on your
          device, and your use of of those applications.<br />
          <br />
          Mobile Device IDs: If you're using our app, we use mobile device IDs
          (the unique identifier assigned to a device by the manufacturer), or
          Advertising IDs, instead of cookies, to recognize you. We do this to
          store your preferences and track your use of our app. Unlike cookies,
          device IDs cannot be deleted, but Advertising IDs can be reset in
          “Settings”. Ad companies also use device IDs or Advertising IDs to
          track your use of the app, track the number of ads displayed, measure
          ad performance and display ads that are more relevant to you.
          Analytics companies use device IDs to track information about app
          usage.<br />
          <br />
          Information collected by third-parties for advertising purposes<br />
          <br />
          We may allow service providers, advertising companies and ad networks,
          and other third parties to display advertisements on our Service.
          These companies may use tracking technologies to collect information
          about users who view or interact with their advertisements. We do not
          provide any non-anonymized personal information to third parties. Some
          of these third-party advertising companies may be advertising networks
          that are members of the Network Advertising Initiative, which offers a
          single location to opt out of ad targeting from member companies ().
          Opting out will not decrease the number of advertisements you see.<br />
          <br />
          <b>How we use the information we collect</b>
          <br />
          In General<br />
          <br />
          We may use information that we collect about you to:<br />
          deliver and improve our products and services, and manage our
          business;<br />
          manage your account and provide you with customer support;<br />
          perform research and analysis about your use of, or interest in, our
          or others’ products, services, or content;<br />
          communicate with you by email, postal mail, telephone and/or mobile
          devices about products or services that may be of interest to you
          either from us or other third parties;<br />
          develop, display, and track content and advertising tailored to your
          interests on our Service and other sites, including providing our
          advertisements to you when you visit other sites;<br />
          website or mobile application analytics;<br />
          verify your eligibility and deliver prizes in connection with contests
          and sweepstakes;<br />
          enforce or exercise any rights in our ; and<br />
          perform functions or services as otherwise described to you at the
          time of collection.<br />
          <br />
          In all circumstances, we may perform these functions directly or use a
          third party vendor to perform these functions on our behalf who will
          be obligated to use your personal information only to perform services
          for us. Also, if you access our Service from a third party social
          platform, such as Facebook, we may share non-personal information with
          that platform to the extent permitted by your agreement with it and
          its privacy settings.<br />
          <br />
          <b>With whom we share your information</b>
          <br />
          <br />
          <b>Information Shared with Other Users</b>
          <br />
          <br />
          When you register as a user of Supernatural, your Supernatural profile
          will be viewable by other users of the Service. Other users (and in
          the case of any sharing features available on Supernatural, the
          individuals or apps with whom a Supernatural user may choose to share
          you with) will be able to view information you have provided to us
          directly or through Facebook, such as your Facebook photos, any
          additional photos you upload, your first name, your age, approximate
          number of miles away, your personal description, and information you
          have in common with the person viewing your profile, such as common
          Facebook friends and likes. If you chat with another user, they will
          see the content of your chat.<br />
          <br />
          <b>Personal information</b>
          <br />
          <br />
          We do not share your personal information with others except as
          indicated in this Privacy Policy or when we inform you and give you an
          opportunity to opt out of having your personal information shared. We
          may share personal information with:<br />
          <br />
          Service providers: We may share information, including personal and
          financial information, with third parties that perform certain
          services on our behalf. These services may include fulfilling orders,
          providing customer service and marketing assistance, performing
          business and sales analysis, ad tracking and analytics, member
          screenings, supporting our Service functionality, and supporting
          contests, sweepstakes, surveys and other features offered through our
          Service. These service providers may have access to personal
          information needed to perform their functions but are not permitted to
          share or use such information for any other purposes.<br />
          <br />
          <b>Other Situations</b>
          <br />
          <br />
          We may disclose your information, including personal information:<br />
          <br />
          In response to a subpoena or similar investigative demand, a court
          order, or a request for cooperation from a law enforcement or other
          government agency; to establish or exercise our legal rights; to
          defend against legal claims; or as otherwise required by law. In such
          cases, we may raise or waive any legal objection or right available to
          us.<br />
          <br />
          When we believe disclosure is appropriate in connection with efforts
          to investigate, prevent, or take other action regarding illegal
          activity, suspected fraud or other wrongdoing; to protect and defend
          the rights, property or safety of our company, our users, our
          employees, or others; to comply with applicable law or cooperate with
          law enforcement; or to enforce our Terms of Use or other agreements or
          policies.<br />
          <br />
          In connection with a substantial corporate transaction, such as the
          sale of our business, a divestiture, merger, consolidation, or asset
          sale, or in the unlikely event of bankruptcy.<br />
          <br />
          <b>Aggregated and/or non-personal information</b>
          <br />
          <br />
          We may use and share non-personal information we collect under any of
          the above circumstances. We may also share it with third parties to
          develop and deliver targeted advertising on our Service, and to
          analyze and report on advertising you see. We may combine non-personal
          information we collect with additional non-personal information
          collected from other sources. We also may share aggregated,
          non-personal information, or personal information in hashed, non-human
          readable form, with third parties, including advisors, advertisers and
          investors, for the purpose of conducting general business analysis or
          other business purposes. <br />
          <br />
          <b>Third Party Websites</b>
          <br />
          <br />
          There are a number of places on our Service where you may click on a
          link to access other websites that do not operate under this Privacy
          Policy. For example, if you click on an advertisement on our Service,
          you may be taken to a website that we do not control. These third-
          party websites may independently solicit and collect information,
          including personal information, from you and, in some instances,
          provide us with information about your activities on those websites.
          We recommend that you consult the privacy statements of all
          third-party websites you visit by clicking on the “privacy” link
          typically located at the bottom of the webpage you are visiting.<br />
          <br />
          <b>How you can access your information</b>
          <br />
          <br />
          If you have a Supernatural account, you have the ability to review and
          update your personal information within the Service by opening your
          account and going to settings. You also may close your account at any
          time by visiting the "Settings" page for your account. If you close
          your account, we will retain certain information associated with your
          account for analytical purposes and record keeping integrity, as well
          as to prevent fraud, enforce our Terms of Use, take actions we deem
          necessary to protect the integrity of our Service or our users, or
          take other actions otherwise permitted by law. In addition, if certain
          information has already been provided to third parties as described in
          this Privacy Policy, retention of that information will be subject to
          those third parties' policies.<br />
          <br />
          <b>Your choices about collection and use of your information</b>
          <br />
          <br />
          You can choose not to provide us with certain information, but that
          may result in you being unable to use certain features of our Service
          because such information may be required in order for you to register
          as user; purchase products or services; participate in a contest,
          promotion, survey, or sweepstakes; ask a question; or initiate other
          transactions.<br />
          <br />
          Our Service may also deliver notifications to your phone or mobile
          device. You can disable these notifications by going into “App
          Settings” on the app or by changing the settings on your mobile
          device.<br />
          <br />
          <b>How we protect your personal information</b>
          <br />
          <br />
          We take security measures to help safeguard your personal information
          from unauthorized access and disclosure. However, no system can be
          completely secure. Therefore, although we take steps to secure your
          information, we do not promise, and you should not expect, that your
          personal information, chats, or other communications will always
          remain secure. Users should also take care with how they handle and
          disclose their personal information and should avoid sending personal
          information through insecure email. Please refer to the Federal Trade
          Commission's website atfor information about how to protect yourself
          against identity theft.<br />
          <br />
          <b>Information you provide about yourself while using our Service</b>
          <br />
          <br />
          We provide areas on our Service where you can post information about
          yourself and others and communicate with others. Such postings are
          governed by our Terms of Use. Also, whenever you voluntarily disclose
          personal information on publicly-viewable pages, that information will
          be publicly available and can be collected and used by others. For
          example, if you post your email address, you may receive unsolicited
          messages. We cannot control who reads your posting or what other users
          may do with the information you voluntarily post, so we encourage you
          to exercise discretion and caution with respect to your personal
          information.<br />
          <br />
          <b>Children's privacy</b>
          <br />
          <br />
          Although our Service is a general audience Service, we restrict the
          use of our service to individuals age 18 and above. We do not
          knowingly collect, maintain, or use personal information from children
          under the age of 18.<br />
          <br />
          <b>Visiting our Service from outside the United States</b>
          <br />
          <br />
          If you are visiting our Service from outside the United States, please
          be aware that your information may be transferred to, stored, and
          processed in the United States where our servers are located and our
          central database is operated. By using our services, you understand
          and agree that your information may be transferred to our facilities
          and those third parties with whom we share it as described in this
          privacy policy.<br />
          <br />
          <b>No Rights of Third Parties</b>
          <br />
          <br />
          This Privacy Policy does not create rights enforceable by third
          parties or require disclosure of any personal information relating to
          users of the website.<br />
          <br />
          <b>Changes to this Privacy Policy</b>
          <br />
          <br />
          We will occasionally update this Privacy Policy to reflect changes in
          the law, our data collection and use practices, the features of our
          Service, or advances in technology. When we post changes to this
          Privacy Policy, we will revise the "last updated" date at the top of
          this Privacy Policy, which will be posted on the Services under
          “Settings” and also on goSupernatural.com, and you should regularly
          check for the most recent version, which is the version that applies.
          If we make any material changes to this Privacy Policy, we will notify
          you of the changes by reasonable means, which could include
          notifications through the Services or via email. Please review the
          changes carefully. Your continued use of the Services following the
          posting of changes to this policy will mean you consent to and accept
          those changes. If you do not consent to such changes you can delete
          your account by following the instructions under Settings.<br />
          <br />
          <b>How to contact us</b>
          <br />
          <br />
          If you have any questions about this Privacy Policy, please contact us
          by email or postal mail as follows:<br />
          Privacy Officer<br />
          Supernatural Software, LLC<br />
          4110 SE Hawthorne Blvd<br />
          Portland OR 97214
        </div>
      </Columns>
    </SimpleContainer>
    <Footer />
  </Fragment>
)

export default Privacy
