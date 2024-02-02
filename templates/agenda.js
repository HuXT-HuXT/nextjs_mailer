const Agenda = `
<mj-wrapper>

	<mj-section padding-bottom="5px">
		<mj-column>
            <mj-text font-size="26px" font-weight="bold">{{ agendaTitle }}</mj-text>
		</mj-column>
	</mj-section>

	<mj-section>
        {{#each agenda}}
            <mj-column width="7%" vertical-align="middle">
                <mj-image css-class="center-on-mobile" align="left" width="25px" src="https://cdn.astramed.org/mailout/img/mark.png" />
            </mj-column>
            <mj-column width="93%" vertical-align="middle">
                    <mj-text font-size="16px" align="left" padding-bottom="6px">{{{markdown this}}}</mj-text>
            </mj-column>
        {{/each}}
	</mj-section>

</mj-wrapper>
`;

export default Agenda;
