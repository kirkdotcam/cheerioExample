const bodydata = `
<!DOCTYPE html>



<html
	class="hasPageActions  has-default-focus theme-light"
	lang="en-us"
	dir="ltr"
	data-authenticated="false"
	data-auth-status-determined="false"
	data-target="docs"
	x-ms-format-detection="none">

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content="Microsoft .NET and .NET Core - Microsoft Lifecycle" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://learn.microsoft.com/en-us/lifecycle/products/microsoft-net-and-net-core" />
			<meta property="og:description" content="Microsoft .NET and .NET Core follows the Modern Lifecycle Policy." />

	<meta property="og:image" content="https://learn.microsoft.com/en-us/media/open-graph-image.png" />

	<meta property="og:image:alt" content="Microsoft Learn" />

	<meta name="twitter:card" content="summary_large_image" />

	<meta name="twitter:site" content="@MicrosoftLearn" />

	<meta name="color-scheme" content="light dark">


	<meta name="author" content="GitHub-Name" />
<meta name="depot_name" content="MSDN.lifecycle-data" />
<meta name="description" content="Microsoft .NET and .NET Core follows the Modern Lifecycle Policy." />
<meta name="document_id" content="3bcffb22-eaf2-779c-3acd-d12897885194" />
<meta name="document_version_independent_id" content="ceb3922c-8abf-98cc-2342-0e5ddd5f6322" />
<meta name="feedback_help_link_type" content="" />
<meta name="feedback_help_link_url" content="" />
<meta name="feedback_product_url" content="" />
<meta name="feedback_system" content="None" />
<meta name="git_commit_id" content="7d852b641a4a6d23e140af3742fd705ce03fefc4" />
<meta name="gitcommit" content="https://github.com/MicrosoftDocs/lifecycle-data-pr/blob/7d852b641a4a6d23e140af3742fd705ce03fefc4/lifecycle-data/products/microsoft-net-and-net-core.yml" />
<meta name="keywords" content="ASP.NET Core,Entity Framework Core" />
<meta name="locale" content="en-us" />
<meta name="ms.author" content="mslpol" />
<meta name="ms.date" content="09/12/2023" />
<meta name="ms.service" content="lifecycle" />
<meta name="ms.topic" content="lifecycle" />
<meta name="original_content_git_url" content="https://github.com/MicrosoftDocs/lifecycle-data-pr/blob/live/lifecycle-data/products/microsoft-net-and-net-core.yml" />
<meta name="page_kind" content="lifecycle" />
<meta name="page_type" content="lifecycle" />
<meta name="schema" content="Lifecycle" />
<meta name="site_name" content="Docs" />
<meta name="uhfHeaderId" content="MSDocsHeader-Lifecycle" />
<meta name="updated_at" content="2024-01-24 05:20 PM" />


	<meta name="persistent_id" content="9c704c5f-397d-d010-3789-4fc52d61e3c6" />
	




	<meta name="github_feedback_content_git_url" content="https://github.com/MicrosoftDocs/lifecycle-data-pr/blob/live/lifecycle-data/products/microsoft-net-and-net-core.yml" />
<link href="https://learn.microsoft.com/en-us/lifecycle/products/microsoft-net-and-net-core" rel="canonical">
	<title>Microsoft .NET and .NET Core - Microsoft Lifecycle | Microsoft Learn</title>

		<link rel="stylesheet" href="/_themes/docs.theme/master/en-us/_themes/styles/b020066a.site-ltr.css ">

	

	<script id="msdocs-script">
	var msDocs = {
		data: {
			timeOrigin: Date.now(),
			contentLocale: 'en-us',
			contentDir: 'ltr',
			userLocale: 'en-us',
			userDir: 'ltr',
			pageTemplate: 'Lifecycle',
			brand: '',
			context: {
			},
			hasBinaryRating: true,
			hasGithubIssues: false,
			feedbackHelpLinkType:'',
			feedbackHelpLinkUrl:'',
			standardFeedback: false,
			showFeedbackReport: false,
			enableTutorialFeedback: false,
			feedbackSystem: 'None',
			feedbackGitHubRepo: '',
			feedbackProductUrl: '',
			extendBreadcrumb: false,
			isEditDisplayable: false,
			hideViewSource: false,
			hasPageActions: true,
			hasPrintButton: true,
			hasBookmark: true,
			hasShare: true,
			isPermissioned: false,
			isPrivateUnauthorized: false,
			hasRecommendations: false,
			contributors: [
						{ name: "v-jasric", url: "https://github.com/v-jasric" }
],
		},
		functions:{}
	};
	</script>
	<script src="https://wcpstatic.microsoft.com/mscc/lib/v2/wcp-consent.js"></script>
	<script src="https://js.monitor.azure.com/scripts/c/ms.jsll-3.min.js"></script>

	<script src="/_themes/docs.theme/master/en-us/_themes/global/67a45209.deprecation.js"></script>

		<link rel="preconnect" href="//mscom.demdex.net" crossorigin>
		<link rel="dns-prefetch" href="//target.microsoft.com">
		<link rel="dns-prefetch" href="//microsoftmscompoc.tt.omtrdc.net">
		<link
			rel="preload"
			as="script"
			href="/static/third-party/adobe-target/at-js/2.9.0/at.js"
			integrity="sha384-1/viVM50hgc33O2gOgkWz3EjiD/Fy/ld1dKYXJRUyjNYVEjSUGcSN+iPiQF7e4cu"
			crossorigin="anonymous"
			id="adobe-target-script"
			type="application/javascript"
		/>
		<script src="/_themes/docs.theme/master/en-us/_themes/scripts/6981a598.index-docs.js"></script>
</head>

<body lang="en-us" dir="ltr">
	<div class="header-holder has-default-focus">
		<a href="#main" class="skip-to-main-link has-outline-color-text visually-hidden-until-focused position-fixed has-inner-focus focus-visible top-0 left-0 right-0 padding-xs has-text-centered has-body-background" tabindex="1">Skip to main content</a>

		<div hidden id="cookie-consent-holder" data-test-id="cookie-consent-container"></div>

		<div id="unsupported-browser" style="
			background-color: white;
			color: black;
			padding: 16px;
			border-bottom: 1px solid grey;"
			hidden
		>
			<div style="max-width: 800px; margin: 0 auto;">
				<p style="font-size: 24px">This browser is no longer supported.</p>
				<p style="font-size: 16px; margin-top: 16px;">Upgrade to Microsoft Edge to take advantage of the latest features, security updates, and technical support.</p>
				<div style="margin-top: 12px;">
					<a href="https://go.microsoft.com/fwlink/p/?LinkID=2092881 "
						style="
						background-color: #0078d4;
						border: 1px solid #0078d4;
						color: white;
						padding: 6px 12px;
						border-radius: 2px;
						display: inline-block;
						">
Download Microsoft Edge					</a>
					<a href="https://learn.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge"
						style="
							background-color: white;
							padding: 6px 12px;
							border: 1px solid #505050;
							color: #171717;
							border-radius: 2px;
							display: inline-block;
							">
More info about Internet Explorer and Microsoft Edge					</a>
				</div>
			</div>
		</div>
		<!-- liquid-tag banners global -->

		<!-- site header -->
		<header id="ms--site-header" data-test-id="site-header-wrapper" role="banner" itemscope="itemscope" itemtype="http://schema.org/Organization">
			<div id="ms--mobile-nav" class="site-header display-none-tablet padding-inline-none gap-none" data-bi-name="mobile-header" data-test-id="mobile-header"></div>
			<div id="ms--primary-nav" class="site-header display-none display-flex-tablet" data-bi-name="L1-header" data-test-id="primary-header"></div>
			<div id="ms--secondary-nav" class="site-header display-none display-flex-tablet" data-bi-name="L2-header" data-test-id="secondary-header"></div>
		</header>


			<div id="content-header" class="content-header uhf-container has-padding has-default-focus border-bottom-none" data-bi-name="content-header">
				<div class="content-header-controls margin-xxs margin-inline-sm-tablet">
					<button type="button" class="contents-button button button-sm margin-right-xxs" data-bi-name="contents-expand" aria-haspopup="true" data-contents-button>
						<span class="icon"><span class="docon docon-menu" aria-hidden="true"></span></span>
						<span class="contents-expand-title">
Table of contents						</span>
					</button>
					<button type="button" class="ap-collapse-behavior ap-expanded button button-sm" data-bi-name="ap-collapse" aria-controls="action-panel">
						<span class="icon"><span class="docon docon-exit-mode" aria-hidden="true"></span></span>
						<span>Exit focus mode</span>
					</button>
				</div>
			</div>

		<div id="disclaimer-holder" class="has-overflow-hidden has-default-focus">
			<!-- liquid-tag banners sectional -->
		</div>
	</div>

	<div class="mainContainer  uhf-container has-default-focus" data-bi-name="body">

		<div class="columns has-large-gaps is-gapless-mobile ">


			<!-- .primary-holder -->
			<section class="primary-holder column ">
				<!--div.columns -->
				<div class="columns is-gapless-mobile has-large-gaps ">


					<div id="main-column" class="column ">

						<main id="main" class="" role="main" data-bi-name="content" lang="en-us" dir="ltr">
							<!-- article-header -->
							<div id="article-header" class="background-color-body margin-top-xxs-desktop margin-bottom-xxs display-none-print">
								<div class="display-flex align-items-center modular-content-container">

									<div id="article-header-page-actions"  class="opacity-none margin-left-auto display-flex flex-wrap-no-wrap align-items-stretch">

										<a
											id="lang-link-tablet"
											class="button button-primary button-clear button-sm display-none display-inline-flex-tablet"
											title="Read in English" data-bi-name="language-toggle"
											data-read-in-link
											hidden>
											<span class="icon margin-none" aria-hidden="true" data-read-in-link-icon>
												<span class="docon docon-locale-globe"></span>
											</span>
											<span class="is-visually-hidden" data-read-in-link-text>Read in English</span>
										</a>

											<button
												type="button"
												class="collection button button-clear button-sm button-primary display-none display-inline-flex-tablet"
												data-list-type="collection"
												data-bi-name="collection"
												title="Add to collection">
												<span class="icon margin-none" aria-hidden="true">
													<span class="docon docon-circle-addition"></span>
												</span>
												<span class="collection-status is-visually-hidden">Save</span>
											</button>
										

											<a	data-contenteditbtn
												class="button button-clear button-sm text-decoration-none button-primary display-none display-inline-flex-tablet"
												aria-label="Edit"
												title="Edit This Document"
												data-bi-name="edit"

													hidden

														href="https://github.com/MicrosoftDocs/lifecycle-data-pr/blob/live/lifecycle-data/products/microsoft-net-and-net-core.yml"
											>
												<span class="icon margin-none" aria-hidden="true">
													<span class="docon docon-edit-outline"></span>
												</span>
											</a>
										


										
										<details class="popover popover-right" id="article-header-page-actions-overflow">
											<summary class="justify-content-flex-start button button-clear button-sm button-primary" aria-label="More actions" title="More actions">
												<span class="icon" aria-hidden="true">
													<span class="docon docon-more-vertical"></span>
												</span>
											</summary>
											<div class="popover-content padding-none">

												<a
													id="lang-link-overflow"
													class="justify-content-flex-start button-sm has-inner-focus button button-clear button-block display-none-tablet"
													title="Read in English" data-bi-name="language-toggle"
													data-page-action-item="overflow-mobile"
													data-check-hidden="true"
													data-read-in-link
													hidden
													>
													<span class="icon" aria-hidden="true" data-read-in-link-icon>
														<span class="docon docon-locale-globe"></span>
													</span>
													<span data-read-in-link-text>Read in English</span>
												</a>

													<button
														type="button"
														class="collection justify-content-flex-start button button-clear button-sm has-inner-focus button-block display-none-tablet"
														data-list-type="collection"
														data-bi-name="collection"
														title="Save"
														data-page-action-item="overflow-mobile"
														data-check-hidden="true"
														data-popover-close>
														<span class="icon" aria-hidden="true">
															<span class="docon docon-circle-addition"></span>
														</span>
														<span class="collection-status">Save</span>
													</button>

			 										
													<button
													 	type="button"
														class="collection justify-content-flex-start button button-clear button-sm has-inner-focus button-block display-none-tablet"
														data-list-type="plan"
														data-bi-name="plan"
														title="Add to Plan"
														data-page-action-item="overflow-mobile"
														data-check-hidden="true"
														data-popover-close
														hidden>
														<span class="icon" aria-hidden="true">
															<span class="docon docon-circle-addition"></span>
														</span>
														<span class="plan-status">Add to Plan</span>
													</button>


													<a	data-contenteditbtn
														class="button button-clear button-block button-sm has-inner-focus justify-content-flex-start text-decoration-none display-none-tablet"
														aria-label="Edit"
														title="Edit This Document"
														data-bi-name="edit"

															hidden

																href="https://github.com/MicrosoftDocs/lifecycle-data-pr/blob/live/lifecycle-data/products/microsoft-net-and-net-core.yml"
													>
														<span class="icon" aria-hidden="true">
															<span class="docon docon-edit-outline"></span>
														</span>
														<span>Edit</span>
													</a>

													<button
														class="button button-block button-clear button-sm justify-content-flex-start has-inner-focus"
														title="Print"
														type="button"
														aria-label="Print"
														data-bi-name="print"
														data-page-action-item="overflow-all"
														data-popover-close
														data-print-page
														data-check-hidden="true">
														<span class="icon" aria-hidden="true">
															<span class="docon docon-print"></span>
														</span>
														<span>Print</span>
													</button>

													<div aria-hidden="true" class="margin-none
														border-top" data-page-action-item="overflow-all"></div>

													
														<a class="button button-clear button-sm has-inner-focus button-block text-decoration-none justify-content-flex-start share-twitter" data-bi-name="twitter" data-page-action-item="overflow-all">
															<span class="icon" aria-hidden="true">
																<span class="docon docon-brand-twitter"></span>
															</span>
															<span>Twitter</span>
														</a>
														<a class="button button-clear button-sm has-inner-focus button-block text-decoration-none justify-content-flex-start share-linkedin" data-bi-name="linkedin" data-page-action-item="overflow-all">
															<span class="icon" aria-hidden="true">
																<span class="docon docon-brand-linkedin"></span>
															</span>
															<span>LinkedIn</span>
														</a>
														<a class="button button-clear button-sm button-block has-inner-focus text-decoration-none justify-content-flex-start share-facebook" data-bi-name="facebook" data-page-action-item="overflow-all">
															<span class="icon" aria-hidden="true">
																<span class="docon docon-brand-facebook"></span>
															</span>
															<span>Facebook</span>
														</a>
														<a class="button button-clear button-sm button-block has-inner-focus text-decoration-none justify-content-flex-start share-email" data-bi-name="email" data-page-action-item="overflow-all">
															<span class="icon" aria-hidden="true">
																<span class="docon docon-mail-message-fill"></span>
															</span>
															<span>Email</span>
														</a>
												
											</div>
										</details>
										
									</div>
								</div>
							</div>
							<!-- end article-header -->


							<div>
								<button type="button" class="border contents-button button button-clear button-sm is-hidden-tablet has-inner-focus" data-bi-name="contents-expand" data-contents-button hidden>
									<span class="icon">
										<span class="docon docon-editor-list-bullet" aria-hidden="true"></span>
									</span>
										<span class="contents-expand-title">Table of contents</span>
								</button>
							</div>

							<!-- end mobile-contents button  -->

							<div class="content ">






								<!-- <content> -->
									<div class="modular-content-container">
	<h1>
		Microsoft .NET and .NET Core
	</h1>

	<p>Microsoft .NET and .NET Core follows the <a href="/en-us/lifecycle/policies/modern" data-linktype="absolute-path">Modern</a> Lifecycle Policy.</p>


	<div class="alert is-info">
		<p>Support dates are shown in the Pacific Time Zone (PT) - Redmond, WA, USA.</p>
	</div>

	<section>
		<h2 id="support-dates">Support Dates</h2>
		<table class="table">
			<thead>
				<tr>
					<th>Listing</th>
					<th align="right">Start Date</th>
					<th align="right">Retirement Date</th>
				</tr>
			</thead>
			<tbody>
					<tr>
						<td>Microsoft .NET and .NET Core</td>
						<td align="right">
							<local-time timezone="America/Los_Angeles" format="date" datetime="2016-06-27T00:00:00.000-08:00">2016-06-27T00:00:00.000-08:00</local-time>
						</td>
						<td align="right">
								In Support
						</td>
					</tr>
			</tbody>
		</table>
	</section>

		<section>
			<h2 id="releases">Releases</h2>
			<table class="table">
				<thead>
					<tr>
						<th>Version</th>
						<th align="right">Start Date</th>
						<th align="right">End Date</th>
					</tr>
				</thead>
				<tbody>
						<tr>
							<td>.NET 8</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2023-11-14T00:00:00.000-08:00">2023-11-14T00:00:00.000-08:00</local-time>
							</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime=""></local-time>
							</td>
						</tr>
						<tr>
							<td>.NET 7</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2022-11-08T00:00:00.000-08:00">2022-11-08T00:00:00.000-08:00</local-time>
							</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2024-05-14T22:59:59.999-08:00">2024-05-14T22:59:59.999-08:00</local-time>
							</td>
						</tr>
						<tr>
							<td>.NET 6.0 (LTS)</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2021-11-08T00:00:00.000-08:00">2021-11-08T00:00:00.000-08:00</local-time>
							</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2024-11-12T22:59:59.999-08:00">2024-11-12T22:59:59.999-08:00</local-time>
							</td>
						</tr>
						<tr>
							<td>.NET 5.0</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2020-11-10T00:00:00.000-08:00">2020-11-10T00:00:00.000-08:00</local-time>
							</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2022-05-10T22:59:59.999-08:00">2022-05-10T22:59:59.999-08:00</local-time>
							</td>
						</tr>
						<tr>
							<td>.NET Core 3.1 (LTS)</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2019-12-03T00:00:00.000-08:00">2019-12-03T00:00:00.000-08:00</local-time>
							</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2022-12-13T22:59:59.999-08:00">2022-12-13T22:59:59.999-08:00</local-time>
							</td>
						</tr>
						<tr>
							<td>.NET Core 3.0</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2019-09-23T00:00:00.000-08:00">2019-09-23T00:00:00.000-08:00</local-time>
							</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2020-03-03T22:59:59.999-08:00">2020-03-03T22:59:59.999-08:00</local-time>
							</td>
						</tr>
						<tr>
							<td>.NET Core 2.2</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2018-12-04T00:00:00.000-08:00">2018-12-04T00:00:00.000-08:00</local-time>
							</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2019-12-23T22:59:59.999-08:00">2019-12-23T22:59:59.999-08:00</local-time>
							</td>
						</tr>
						<tr>
							<td>.NET Core 2.1 (LTS)</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2018-05-30T00:00:00.000-08:00">2018-05-30T00:00:00.000-08:00</local-time>
							</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2021-08-21T22:59:59.999-08:00">2021-08-21T22:59:59.999-08:00</local-time>
							</td>
						</tr>
						<tr>
							<td>.NET Core 2.0</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2017-08-14T00:00:00.000-08:00">2017-08-14T00:00:00.000-08:00</local-time>
							</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2018-10-01T22:59:59.999-08:00">2018-10-01T22:59:59.999-08:00</local-time>
							</td>
						</tr>
						<tr>
							<td>.NET Core 1.1</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2016-11-16T00:00:00.000-08:00">2016-11-16T00:00:00.000-08:00</local-time>
							</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2019-06-27T22:59:59.999-08:00">2019-06-27T22:59:59.999-08:00</local-time>
							</td>
						</tr>
						<tr>
							<td>.NET Core 1.0</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2016-06-27T00:00:00.000-08:00">2016-06-27T00:00:00.000-08:00</local-time>
							</td>
							<td align="right">
								<local-time timezone="America/Los_Angeles" format="date" datetime="2019-06-27T22:59:59.999-08:00">2019-06-27T22:59:59.999-08:00</local-time>
							</td>
						</tr>
				</tbody>
			</table>
		</section>

	<h2 id="links">Links</h2>
<ul>
<li><a href="https://dotnet.microsoft.com/platform/support/policy/dotnet-core" data-linktype="external">.NET Core support details (dotnet)</a></li>
<li><a href="https://aka.ms/dotnet-release-schedule" data-linktype="external">.NET release schedule</a></li>
<li><a href="/en-us/lifecycle/faq/dotnet-core" data-linktype="absolute-path">Lifecycle FAQ - .NET Core</a></li>
<li><a href="https://dotnet.microsoft.com/platform/support/policy/aspnet" data-linktype="external">ASP.NET and ASP.NET Core support details</a></li>
<li><a href="/en-us/ef/core/what-is-new" data-linktype="absolute-path">Entity Framework support details</a></li>
</ul>
<div class="NOTE">
<p>Note</p>
<p>Beginning with .NET 5.0, Microsoft .NET Core has been rebranded as .NET.</p>
<p>ASP.NET Core and Entity Framework Core follow the same lifecycle as .NET Core.</p>
</div>

</div>

							</div>

							<div id="assertive-live-region" role="alert" aria-live="assertive" class="visually-hidden" aria-relevant="additions" aria-atomic="true"></div>
							<div id="polite-live-region" role="status" aria-live="polite" class="visually-hidden" aria-relevant="additions" aria-atomic="true"></div>
							<!-- </content> -->

						</main>




						<!-- recommendations section -->
						<!-- end recommendations section -->

						<!-- feedback section -->
						<!-- end feedback section -->

						<!-- feedback report section -->
						<!-- end feedback report section -->


						<div class="border-top is-visible-interactive has-default-focus margin-top-sm ">



	<footer id="footer-interactive" data-bi-name="footer" class="footer-layout">
	<div class="display-flex gap-xs flex-wrap-wrap is-full-height padding-right-lg-desktop">
			<a
				data-mscc-ic="false"
				class="locale-selector-link button button-sm button-clear flex-shrink-0"
				href="#"
				data-bi-name="select-locale">
					<span class="icon" aria-hidden="true">
						<span class="docon docon-world"></span>
					</span>
					<span class="local-selector-link-text"></span></a>
		<div class="ccpa-privacy-link" data-ccpa-privacy-link hidden>
<a
	href="https://aka.ms/yourcaliforniaprivacychoices"
	class="button button-sm button-clear flex-shrink-0"
	data-mscc-ic="false"
	data-bi-name="your-privacy-choices"
>
	<svg
		role="img"
		aria-label="California Consumer Privacy Act (CCPA) Opt-Out Icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 30 14"
		xml:space="preserve"
		height="16"
		width="43"
		focusable="false"
	>
		<title>California Consumer Privacy Act (CCPA) Opt-Out Icon</title>
		<path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"></path>
		<path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f"></path>
		<path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style="fill:#fff"></path>
		<path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style="fill:#06f"></path>
	</svg>
	<span>Your Privacy Choices</span>
</a>
		</div>
		<div class="flex-shrink-0">
<div class="dropdown has-caret-up">
	<button class="dropdown-trigger button button-clear button-sm has-inner-focus theme-dropdown-trigger"
		aria-controls="theme-menu-interactive" aria-expanded="false" title="Theme" data-bi-name="theme">
		<span class="icon">
			<span class="docon docon-sun" aria-hidden="true"></span>
		</span>
		<span>Theme</span>
		<span class="icon expanded-indicator" aria-hidden="true">
			<span class="docon docon-chevron-down-light"></span>
		</span>
	</button>
	<div class="dropdown-menu" id="theme-menu-interactive" role="menu">
		<ul class="theme-selector padding-xxs" role="none">
			<li class="theme display-block" role="menuitem">
				<button class="button button-clear button-sm theme-control button-block justify-content-flex-start"
					data-theme-to="light">
					<span class="theme-light margin-right-xxs">
						<span
							class="theme-selector-icon border display-inline-block has-body-background"
							aria-hidden="true">
							<svg class="svg" xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 22 14">
								<rect width="22" height="14" class="has-fill-body-background" />
								<rect x="5" y="5" width="12" height="4" class="has-fill-secondary" />
								<rect x="5" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="8" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="11" y="2" width="3" height="1" class="has-fill-secondary" />
								<rect x="1" y="1" width="2" height="2" class="has-fill-secondary" />
								<rect x="5" y="10" width="7" height="2" rx="0.3" class="has-fill-primary" />
								<rect x="19" y="1" width="2" height="2" rx="1" class="has-fill-secondary" />
							</svg>
						</span>
					</span>
					<span>
Light					</span>
				</button>
			</li>
			<li class="theme display-block" role="menuitem">
				<button class="button button-clear button-sm theme-control button-block justify-content-flex-start"
					data-theme-to="dark">
					<span class="theme-dark margin-right-xxs">
						<span
							class="border theme-selector-icon display-inline-block has-body-background"
							aria-hidden="true">
							<svg class="svg" xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 22 14">
								<rect width="22" height="14" class="has-fill-body-background" />
								<rect x="5" y="5" width="12" height="4" class="has-fill-secondary" />
								<rect x="5" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="8" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="11" y="2" width="3" height="1" class="has-fill-secondary" />
								<rect x="1" y="1" width="2" height="2" class="has-fill-secondary" />
								<rect x="5" y="10" width="7" height="2" rx="0.3" class="has-fill-primary" />
								<rect x="19" y="1" width="2" height="2" rx="1" class="has-fill-secondary" />
							</svg>
						</span>
					</span>
					<span>
Dark					</span>
				</button>
			</li>
			<li class="theme display-block" role="menuitem">
				<button class="button button-clear button-sm theme-control button-block justify-content-flex-start"
					data-theme-to="high-contrast">
					<span class="theme-high-contrast margin-right-xxs">
						<span
							class="border theme-selector-icon display-inline-block has-body-background"
							aria-hidden="true">
							<svg class="svg" xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 22 14">
								<rect width="22" height="14" class="has-fill-body-background" />
								<rect x="5" y="5" width="12" height="4" class="has-fill-secondary" />
								<rect x="5" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="8" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="11" y="2" width="3" height="1" class="has-fill-secondary" />
								<rect x="1" y="1" width="2" height="2" class="has-fill-secondary" />
								<rect x="5" y="10" width="7" height="2" rx="0.3" class="has-fill-primary" />
								<rect x="19" y="1" width="2" height="2" rx="1" class="has-fill-secondary" />
							</svg>
						</span>
					</span>
					<span>
High contrast					</span>
				</button>
			</li>
		</ul>
	</div>
</div>
		</div>
	</div>
	<ul class="links" data-bi-name="footerlinks">
		<li class="manage-cookies-holder" hidden></li>
				<li><a class="external-link-indicator" data-mscc-ic="false" href="/en-us/previous-versions/" data-bi-name="archivelink">Previous Versions</a></li>
				<li><a class="external-link-indicator" data-mscc-ic="false" href="https://techcommunity.microsoft.com/t5/microsoft-learn-blog/bg-p/MicrosoftLearnBlog" data-bi-name="bloglink">Blog</a></li>
				<li><a class="external-link-indicator" data-mscc-ic="false" href="/en-us/contribute/" data-bi-name="contributorGuide">Contribute</a></li>
					<li><a class="external-link-indicator" data-mscc-ic="false" href="https://go.microsoft.com/fwlink/?LinkId=521839" data-bi-name="privacy">Privacy</a></li>
				<li><a class="external-link-indicator" data-mscc-ic="false" href="/en-us/legal/termsofuse" data-bi-name="termsofuse">Terms of Use</a></li>
				<li><a class="external-link-indicator" data-mscc-ic="false" href="https://www.microsoft.com/legal/intellectualproperty/Trademarks/" data-bi-name="trademarks">Trademarks</a></li>
		<li>&copy; Microsoft 2024</li>
	</ul>
</footer>
						</div>

					</div>


				</div>
				<!--end of div.columns -->

			</section>
			<!--end of .primary-holder -->

			<!-- interactive container -->
			<aside id="interactive-container" class="interactive-container is-visible-interactive column has-body-background-dark ">
			</aside>
			<!-- end of interactive container -->
		</div>

	</div>
	<!--end of .mainContainer -->

	<section class="border-top has-default-focus is-hidden-interactive margin-top-sm ">



	<footer id="footer" data-bi-name="footer" class="footer-layout uhf-container has-padding" role="contentinfo">
	<div class="display-flex gap-xs flex-wrap-wrap is-full-height padding-right-lg-desktop">
			<a
				data-mscc-ic="false"
				class="locale-selector-link button button-sm button-clear flex-shrink-0"
				href="#"
				data-bi-name="select-locale">
					<span class="icon" aria-hidden="true">
						<span class="docon docon-world"></span>
					</span>
					<span class="local-selector-link-text"></span></a>
		<div class="ccpa-privacy-link" data-ccpa-privacy-link hidden>
<a
	href="https://aka.ms/yourcaliforniaprivacychoices"
	class="button button-sm button-clear flex-shrink-0"
	data-mscc-ic="false"
	data-bi-name="your-privacy-choices"
>
	<svg
		role="img"
		aria-label="California Consumer Privacy Act (CCPA) Opt-Out Icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 30 14"
		xml:space="preserve"
		height="16"
		width="43"
		focusable="false"
	>
		<title>California Consumer Privacy Act (CCPA) Opt-Out Icon</title>
		<path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"></path>
		<path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f"></path>
		<path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style="fill:#fff"></path>
		<path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style="fill:#06f"></path>
	</svg>
	<span>Your Privacy Choices</span>
</a>
		</div>
		<div class="flex-shrink-0">
<div class="dropdown has-caret-up">
	<button class="dropdown-trigger button button-clear button-sm has-inner-focus theme-dropdown-trigger"
		aria-controls="theme-menu" aria-expanded="false" title="Theme" data-bi-name="theme">
		<span class="icon">
			<span class="docon docon-sun" aria-hidden="true"></span>
		</span>
		<span>Theme</span>
		<span class="icon expanded-indicator" aria-hidden="true">
			<span class="docon docon-chevron-down-light"></span>
		</span>
	</button>
	<div class="dropdown-menu" id="theme-menu" role="menu">
		<ul class="theme-selector padding-xxs" role="none">
			<li class="theme display-block" role="menuitem">
				<button class="button button-clear button-sm theme-control button-block justify-content-flex-start"
					data-theme-to="light">
					<span class="theme-light margin-right-xxs">
						<span
							class="theme-selector-icon border display-inline-block has-body-background"
							aria-hidden="true">
							<svg class="svg" xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 22 14">
								<rect width="22" height="14" class="has-fill-body-background" />
								<rect x="5" y="5" width="12" height="4" class="has-fill-secondary" />
								<rect x="5" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="8" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="11" y="2" width="3" height="1" class="has-fill-secondary" />
								<rect x="1" y="1" width="2" height="2" class="has-fill-secondary" />
								<rect x="5" y="10" width="7" height="2" rx="0.3" class="has-fill-primary" />
								<rect x="19" y="1" width="2" height="2" rx="1" class="has-fill-secondary" />
							</svg>
						</span>
					</span>
					<span>
Light					</span>
				</button>
			</li>
			<li class="theme display-block" role="menuitem">
				<button class="button button-clear button-sm theme-control button-block justify-content-flex-start"
					data-theme-to="dark">
					<span class="theme-dark margin-right-xxs">
						<span
							class="border theme-selector-icon display-inline-block has-body-background"
							aria-hidden="true">
							<svg class="svg" xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 22 14">
								<rect width="22" height="14" class="has-fill-body-background" />
								<rect x="5" y="5" width="12" height="4" class="has-fill-secondary" />
								<rect x="5" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="8" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="11" y="2" width="3" height="1" class="has-fill-secondary" />
								<rect x="1" y="1" width="2" height="2" class="has-fill-secondary" />
								<rect x="5" y="10" width="7" height="2" rx="0.3" class="has-fill-primary" />
								<rect x="19" y="1" width="2" height="2" rx="1" class="has-fill-secondary" />
							</svg>
						</span>
					</span>
					<span>
Dark					</span>
				</button>
			</li>
			<li class="theme display-block" role="menuitem">
				<button class="button button-clear button-sm theme-control button-block justify-content-flex-start"
					data-theme-to="high-contrast">
					<span class="theme-high-contrast margin-right-xxs">
						<span
							class="border theme-selector-icon display-inline-block has-body-background"
							aria-hidden="true">
							<svg class="svg" xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 22 14">
								<rect width="22" height="14" class="has-fill-body-background" />
								<rect x="5" y="5" width="12" height="4" class="has-fill-secondary" />
								<rect x="5" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="8" y="2" width="2" height="1" class="has-fill-secondary" />
								<rect x="11" y="2" width="3" height="1" class="has-fill-secondary" />
								<rect x="1" y="1" width="2" height="2" class="has-fill-secondary" />
								<rect x="5" y="10" width="7" height="2" rx="0.3" class="has-fill-primary" />
								<rect x="19" y="1" width="2" height="2" rx="1" class="has-fill-secondary" />
							</svg>
						</span>
					</span>
					<span>
Hgh contrast					</span>
				</button>
			</li>
		</ul>
	</div>
</div>
		</div>
	</div>
	<ul class="links" data-bi-name="footerlinks">
		<li class="manage-cookies-holder" hidden></li>
				<li><a class="external-link-indicator" data-mscc-ic="false" href="/en-us/previous-versions/" data-bi-name="archivelink">Previous Versions</a></li>
				<li><a class="external-link-indicator" data-mscc-ic="false" href="https://techcommunity.microsoft.com/t5/microsoft-learn-blog/bg-p/MicrosoftLearnBlog" data-bi-name="bloglink">Blog</a></li>
				<li><a class="external-link-indicator" data-mscc-ic="false" href="/en-us/contribute/" data-bi-name="contributorGuide">Contribute</a></li>
					<li><a class="external-link-indicator" data-mscc-ic="false" href="https://go.microsoft.com/fwlink/?LinkId=521839" data-bi-name="privacy">Privacy</a></li>
				<li><a class="external-link-indicator" data-mscc-ic="false" href="/en-us/legal/termsofuse" data-bi-name="termsofuse">Terms of Use</a></li>
				<li><a class="external-link-indicator" data-mscc-ic="false" href="https://www.microsoft.com/legal/intellectualproperty/Trademarks/" data-bi-name="trademarks">Trademarks</a></li>
		<li>&copy; Microsoft 2024</li>
	</ul>
</footer>
	</section>

	<div id="action-panel" role="region" aria-label="Action Panel" class="action-panel has-default-focus" tabindex="-1"></div>
</body>
</html>
`

module.exports = {
  bodydata: bodydata
}
