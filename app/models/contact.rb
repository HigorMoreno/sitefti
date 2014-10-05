class Contact < MailForm::Base
  attribute :nome,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :assunto,    :validate => true
  attribute :mensagem,    :validate => true
  attribute :cidade,    :validate => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => :assunto,
      :to => User.first.email,
      :from => %("#{nome}" <#{email}>)
    }
  end
end